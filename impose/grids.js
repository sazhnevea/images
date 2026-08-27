import { CUT_OFF, DIRECTION, LAYOUT_TYPE } from '../constants.js';

export const GRID_GUTTER = 50;
export const SPINE_GUTTER = 100;
export const PAGE_VERTICAL_PADDING = 70;

const portrait = (scale, left = 0, top = 0) => ({
  direction: DIRECTION.V,
  width: scale * 2,
  height: scale * 3,
  left,
  top,
});

const horizontal = (scale, left = 0, top = 0) => ({
  direction: DIRECTION.H,
  width: scale * 3,
  height: scale * 2,
  left,
  top,
});

const bounds = (slots) => ({
  width: Math.max(...slots.map((slot) => slot.left + slot.width)),
  height: Math.max(...slots.map((slot) => slot.top + slot.height)),
});

const layout = (slots) => ({ slots, ...bounds(slots) });

const single = (direction) => (scale) => layout([
  direction === DIRECTION.V ? portrait(scale) : horizontal(scale),
]);

const stackHorizontal = (count) => (scale) => {
  const slots = Array.from({ length: count }, (_, index) => (
    horizontal(scale, 0, index * (scale * 2 + GRID_GUTTER))
  ));
  return layout(slots);
};

const gridPortrait2x2 = (scale) => {
  const slots = [0, 1, 2, 3].map((index) => portrait(
    scale,
    (index % 2) * (scale * 2 + GRID_GUTTER),
    Math.floor(index / 2) * (scale * 3 + GRID_GUTTER),
  ));
  return layout(slots);
};

// The two portrait slots determine the block width. The horizontal slot uses
// its own scale so both rows align while every slot keeps an exact 2:3 ratio.
const portraitPairAndHorizontal = (horizontalFirst) => (portraitScale) => {
  const horizontalScale = (portraitScale * 4 + GRID_GUTTER) / 3;
  const horizontalSlot = horizontal(horizontalScale);
  const portraitSlots = [
    portrait(portraitScale),
    portrait(portraitScale, portraitScale * 2 + GRID_GUTTER),
  ];
  const rowGap = GRID_GUTTER;

  if (horizontalFirst) {
    portraitSlots.forEach((slot) => {
      slot.top = horizontalSlot.height + rowGap;
    });
    return layout([horizontalSlot, ...portraitSlots]);
  }

  horizontalSlot.top = portraitSlots[0].height + rowGap;
  return layout([...portraitSlots, horizontalSlot]);
};

const mosaic10 = (topScale) => {
  // The rows use different heights so their outer edges align:
  // 6 * topScale + gutter = 8.5 * bottomScale + 2 * gutter.
  const bottomScale = (topScale * 12 - GRID_GUTTER * 2) / 17;
  const bottomHorizontalScale = bottomScale * 3 / 2;
  const topHorizontalWidth = topScale * 3;
  const bottomHorizontalWidth = bottomHorizontalScale * 3;
  const bottomTop = topScale * 2 + GRID_GUTTER;

  return layout([
    horizontal(topScale),
    horizontal(topScale, topHorizontalWidth + GRID_GUTTER),
    portrait(bottomScale, 0, bottomTop),
    horizontal(
      bottomHorizontalScale,
      bottomScale * 2 + GRID_GUTTER,
      bottomTop,
    ),
    portrait(
      bottomScale,
      bottomScale * 2 + GRID_GUTTER + bottomHorizontalWidth + GRID_GUTTER,
      bottomTop,
    ),
  ]);
};

const linkedLayout19 = (portraitScale) => ({
  left: portraitPairAndHorizontal(false)(portraitScale),
  right: stackHorizontal(2)((portraitScale * 17 + GRID_GUTTER * 2) / 12),
});

const linkedLayout20 = (portraitScale) => ({
  left: gridPortrait2x2(portraitScale),
  right: stackHorizontal(2)(portraitScale * 3 / 2),
});

const hasValidSlotDimensions = (candidate) => {
  const layouts = candidate.left && candidate.right
    ? [candidate.left, candidate.right]
    : [candidate];

  return layouts.every((currentLayout) => currentLayout.slots.every((slot) => (
    Number.isInteger(slot.width)
    && Number.isInteger(slot.height)
    && slot.width > 0
    && slot.height > 0
    && slot.width % 2 === 0
    && slot.height % 2 === 0
  )));
};

const scalePredicates = {
  default: (scale) => scale % 2 === 0,
  alignedPair: (scale) => scale % 2 === 0,
  mosaic10: (scale) => scale % 2 === 0,
  layout19: (scale) => scale % 2 === 0,
  layout20: (scale) => scale % 4 === 0,
};

const position = (fitted, offsetLeft, offsetTop) => (
  fitted.slots.map((slot) => ({
    ...slot,
    left: Math.round(slot.left + offsetLeft),
    top: Math.round(slot.top + offsetTop),
  }))
);

const place = (fitted, container) => {
  const offsetLeft = Math.round(container.left + (container.width - fitted.width) / 2);
  const offsetTop = Math.round(container.top + (container.height - fitted.height) / 2);
  return position(fitted, offsetLeft, offsetTop);
};

const findFit = (builder, container, predicate = scalePredicates.default) => {
  let fitted = null;

  for (let scale = 1; scale <= Math.max(container.width, container.height); scale += 1) {
    if (!predicate(scale)) continue;
    const candidate = builder(scale);
    if (!hasValidSlotDimensions(candidate)) continue;
    if (candidate.width > container.width || candidate.height > container.height) break;
    fitted = candidate;
  }

  if (!fitted) {
    throw new Error(`Сетка не помещается в область ${container.width}x${container.height}`);
  }

  return fitted;
};

const fit = (builder, container, predicate = scalePredicates.default) => (
  place(findFit(builder, container, predicate), container)
);

const getPrintableContainer = (layoutWidth, layoutHeight) => ({
  left: CUT_OFF,
  top: CUT_OFF,
  width: layoutWidth - CUT_OFF * 2,
  height: layoutHeight - CUT_OFF * 2,
});

const getPageContainers = (layoutWidth, layoutHeight) => {
  const printable = getPrintableContainer(layoutWidth, layoutHeight);
  const fold = layoutWidth / 2;
  const printableRight = printable.left + printable.width;
  const leftFitEdge = Math.floor(fold - SPINE_GUTTER);
  const rightFitEdge = Math.ceil(fold + SPINE_GUTTER);

  return [
    {
      fit: {
        ...printable,
        top: printable.top + PAGE_VERTICAL_PADDING,
        width: leftFitEdge - printable.left,
        height: printable.height - PAGE_VERTICAL_PADDING * 2,
      },
      place: {
        ...printable,
        width: fold - printable.left,
      },
    },
    {
      fit: {
        ...printable,
        left: rightFitEdge,
        top: printable.top + PAGE_VERTICAL_PADDING,
        width: printableRight - rightFitEdge,
        height: printable.height - PAGE_VERTICAL_PADDING * 2,
      },
      place: {
        ...printable,
        left: fold,
        width: printableRight - fold,
      },
    },
  ];
};

const placeOnPage = (fitted, page) => {
  const offsetLeft = Math.round(
    page.place.left + (page.place.width - fitted.width) / 2,
  );
  const offsetTop = Math.round(
    page.place.top + (page.place.height - fitted.height) / 2,
  );

  return position(fitted, offsetLeft, offsetTop);
};

const fitSplit = (layoutWidth, layoutHeight, leftBuilder, rightBuilder, options = {}) => {
  const [left, right] = getPageContainers(layoutWidth, layoutHeight);
  return [
    ...placeOnPage(findFit(leftBuilder, left.fit, options.leftPredicate), left),
    ...placeOnPage(findFit(rightBuilder, right.fit, options.rightPredicate), right),
  ];
};

const fitLeftAndFullBleedRight = (layoutWidth, layoutHeight, leftBuilder) => {
  const [leftPage] = getPageContainers(layoutWidth, layoutHeight);
  const rightLeft = Math.floor(layoutWidth / 2);

  return [
    ...placeOnPage(findFit(leftBuilder, leftPage.fit), leftPage),
    {
      direction: DIRECTION.V,
      width: layoutWidth - rightLeft,
      height: layoutHeight,
      left: rightLeft,
      top: 0,
    },
  ];
};

const fitLinkedSplit = (layoutWidth, layoutHeight, builder, predicate) => {
  const [leftContainer, rightContainer] = getPageContainers(layoutWidth, layoutHeight);
  let fitted = null;

  for (let scale = 1; scale <= layoutHeight; scale += 1) {
    if (!predicate(scale)) continue;
    const candidate = builder(scale);
    if (!hasValidSlotDimensions(candidate)) continue;
    const fits = candidate.left.width <= leftContainer.fit.width
      && candidate.right.width <= rightContainer.fit.width
      && candidate.left.height <= leftContainer.fit.height
      && candidate.right.height <= rightContainer.fit.height;
    if (!fits) break;
    fitted = candidate;
  }

  if (!fitted) {
    throw new Error(`Связанная сетка не помещается в разворот ${layoutWidth}x${layoutHeight}`);
  }

  return [
    ...placeOnPage(fitted.left, leftContainer),
    ...placeOnPage(fitted.right, rightContainer),
  ];
};

export const getSlots = (layoutType, layoutWidth, layoutHeight) => {
  const printable = getPrintableContainer(layoutWidth, layoutHeight);

  switch (layoutType) {
    case LAYOUT_TYPE.L10:
      return fit(mosaic10, printable, scalePredicates.mosaic10);
    case LAYOUT_TYPE.L11:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        portraitPairAndHorizontal(true),
        portraitPairAndHorizontal(false),
        {
          leftPredicate: scalePredicates.alignedPair,
          rightPredicate: scalePredicates.alignedPair,
        },
      );
    case LAYOUT_TYPE.L12:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        single(DIRECTION.V),
        single(DIRECTION.V),
      );
    case LAYOUT_TYPE.L13:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        stackHorizontal(3),
        portraitPairAndHorizontal(false),
        { rightPredicate: scalePredicates.alignedPair },
      );
    case LAYOUT_TYPE.L14:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        single(DIRECTION.V),
        stackHorizontal(3),
      );
    case LAYOUT_TYPE.L15:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        stackHorizontal(2),
        stackHorizontal(3),
      );
    case LAYOUT_TYPE.L16:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        stackHorizontal(2),
        stackHorizontal(2),
      );
    case LAYOUT_TYPE.L17:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        single(DIRECTION.V),
        stackHorizontal(2),
      );
    case LAYOUT_TYPE.L19:
      return fitLinkedSplit(
        layoutWidth,
        layoutHeight,
        linkedLayout19,
        scalePredicates.layout19,
      );
    case LAYOUT_TYPE.L20:
      return fitLinkedSplit(
        layoutWidth,
        layoutHeight,
        linkedLayout20,
        scalePredicates.layout20,
      );
    case LAYOUT_TYPE.L21:
      return fitSplit(
        layoutWidth,
        layoutHeight,
        gridPortrait2x2,
        stackHorizontal(3),
      );
    case LAYOUT_TYPE.L23:
      return fitLeftAndFullBleedRight(
        layoutWidth,
        layoutHeight,
        stackHorizontal(3),
      );
    default:
      throw new Error(`Неизвестный тип сетки: ${layoutType}`);
  }
};
