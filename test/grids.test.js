import assert from 'node:assert/strict';
import test from 'node:test';

import {
  CUT_OFF,
  DIRECTION,
  LAYOUT_TYPE,
  LAYOUT_TYPE_DIRECTION_MAPPING,
} from '../constants.js';
import {
  GRID_GUTTER,
  PAGE_VERTICAL_PADDING,
  SPINE_GUTTER,
  getSlots,
} from '../impose/grids.js';

const LAYOUT_WIDTH = 4913;
const LAYOUT_HEIGHT = 3496;
const GRID_TYPES = Object.entries(LAYOUT_TYPE)
  .filter(([key]) => /^L\d+$/.test(key))
  .map(([, value]) => value);

test('all 12 grids have unique direction sequences', () => {
  assert.equal(GRID_TYPES.length, 12);

  const sequences = GRID_TYPES.map(
    (layoutType) => LAYOUT_TYPE_DIRECTION_MAPPING[layoutType].join(','),
  );

  assert.equal(new Set(sequences).size, GRID_TYPES.length);
});

test('grid 10 aligns the outer edges of both rows', () => {
  const slots = getSlots(LAYOUT_TYPE.L10, LAYOUT_WIDTH, LAYOUT_HEIGHT);
  const topRow = slots.slice(0, 2);
  const bottomRow = slots.slice(2);
  const getLeft = (row) => Math.min(...row.map((slot) => slot.left));
  const getRight = (row) => Math.max(...row.map((slot) => slot.left + slot.width));

  assert.equal(getLeft(topRow), getLeft(bottomRow));
  assert.equal(getRight(topRow), getRight(bottomRow));
});

const SPLIT_LAYOUTS = [
  [LAYOUT_TYPE.L11, 3],
  [LAYOUT_TYPE.L12, 1],
  [LAYOUT_TYPE.L13, 3],
  [LAYOUT_TYPE.L14, 1],
  [LAYOUT_TYPE.L15, 2],
  [LAYOUT_TYPE.L16, 2],
  [LAYOUT_TYPE.L17, 1],
  [LAYOUT_TYPE.L19, 3],
  [LAYOUT_TYPE.L20, 4],
  [LAYOUT_TYPE.L21, 4],
];

SPLIT_LAYOUTS.forEach(([layoutType, leftSlotCount]) => {
  test(`grid ${layoutType} reserves a wider gutter at the spine`, () => {
    const slots = getSlots(layoutType, LAYOUT_WIDTH, LAYOUT_HEIGHT);
    const left = slots.slice(0, leftSlotCount);
    const right = slots.slice(leftSlotCount);
    const leftEdge = Math.max(...left.map((slot) => slot.left + slot.width));
    const rightEdge = Math.min(...right.map((slot) => slot.left));

    assert.ok(rightEdge - leftEdge >= SPINE_GUTTER);
  });

  test(`grid ${layoutType} centers each block between trim and fold`, () => {
    const slots = getSlots(layoutType, LAYOUT_WIDTH, LAYOUT_HEIGHT);
    const left = slots.slice(0, leftSlotCount);
    const right = slots.slice(leftSlotCount);
    const fold = LAYOUT_WIDTH / 2;
    const getBounds = (group) => ({
      left: Math.min(...group.map((slot) => slot.left)),
      right: Math.max(...group.map((slot) => slot.left + slot.width)),
    });
    const leftBounds = getBounds(left);
    const rightBounds = getBounds(right);
    const leftCenter = (leftBounds.left + leftBounds.right) / 2;
    const rightCenter = (rightBounds.left + rightBounds.right) / 2;
    const expectedLeftCenter = (CUT_OFF + fold) / 2;
    const expectedRightCenter = (fold + LAYOUT_WIDTH - CUT_OFF) / 2;

    assert.ok(Math.abs(leftCenter - expectedLeftCenter) <= 1);
    assert.ok(Math.abs(rightCenter - expectedRightCenter) <= 1);
  });

  test(`grid ${layoutType} keeps vertical padding from trim lines`, () => {
    const slots = getSlots(layoutType, LAYOUT_WIDTH, LAYOUT_HEIGHT);
    const minTop = CUT_OFF + PAGE_VERTICAL_PADDING;
    const maxBottom = LAYOUT_HEIGHT - CUT_OFF - PAGE_VERTICAL_PADDING;

    slots.forEach((slot) => {
      assert.ok(slot.top >= minTop);
      assert.ok(slot.top + slot.height <= maxBottom);
    });
  });
});

test('grid 10 keeps the regular gutter across the whole spread', () => {
  const grid10 = getSlots(LAYOUT_TYPE.L10, LAYOUT_WIDTH, LAYOUT_HEIGHT);
  const gapBetween = (left, right) => right.left - (left.left + left.width);

  assert.equal(gapBetween(grid10[0], grid10[1]), GRID_GUTTER);
});

test('grid 23 makes the right portrait full bleed', () => {
  const slots = getSlots(LAYOUT_TYPE.L23, LAYOUT_WIDTH, LAYOUT_HEIGHT);
  const rightPortrait = slots[3];

  assert.equal(rightPortrait.top, 0);
  assert.equal(rightPortrait.height, LAYOUT_HEIGHT);
  assert.equal(rightPortrait.left, Math.floor(LAYOUT_WIDTH / 2));
  assert.equal(rightPortrait.left + rightPortrait.width, LAYOUT_WIDTH);
});

[
  [LAYOUT_TYPE.L16, 2],
  [LAYOUT_TYPE.L19, 3],
  [LAYOUT_TYPE.L20, 4],
].forEach(([layoutType, leftSlotCount]) => {
  test(`grid ${layoutType} aligns the heights of both page halves`, () => {
    const slots = getSlots(layoutType, LAYOUT_WIDTH, LAYOUT_HEIGHT);
    const left = slots.slice(0, leftSlotCount);
    const right = slots.slice(leftSlotCount);
    const getTop = (group) => Math.min(...group.map((slot) => slot.top));
    const getBottom = (group) => Math.max(
      ...group.map((slot) => slot.top + slot.height),
    );

    assert.equal(getTop(left), getTop(right));
    assert.equal(getBottom(left), getBottom(right));
  });
});

for (const layoutType of GRID_TYPES) {
  test(`grid ${layoutType} creates exact 2:3 slots inside the printable area`, () => {
    const expectedDirections = LAYOUT_TYPE_DIRECTION_MAPPING[layoutType];
    const slots = getSlots(layoutType, LAYOUT_WIDTH, LAYOUT_HEIGHT);

    assert.equal(slots.length, expectedDirections.length);

    slots.forEach((slot, index) => {
      assert.equal(slot.direction, expectedDirections[index]);

      if (layoutType === LAYOUT_TYPE.L23 && index === 3) {
        return;
      }

      assert.equal(slot.width % 2, 0);
      assert.equal(slot.height % 2, 0);

      if (slot.direction === DIRECTION.V) {
        assert.equal(slot.width * 3, slot.height * 2);
      } else {
        assert.equal(slot.width * 2, slot.height * 3);
      }

      assert.ok(slot.left >= CUT_OFF);
      assert.ok(slot.top >= CUT_OFF);
      assert.ok(slot.left + slot.width <= LAYOUT_WIDTH - CUT_OFF);
      assert.ok(slot.top + slot.height <= LAYOUT_HEIGHT - CUT_OFF);
    });

    slots.forEach((slot, index) => {
      slots.slice(index + 1).forEach((otherSlot) => {
        const overlaps = slot.left < otherSlot.left + otherSlot.width
          && slot.left + slot.width > otherSlot.left
          && slot.top < otherSlot.top + otherSlot.height
          && slot.top + slot.height > otherSlot.top;
        assert.equal(overlaps, false);
      });
    });
  });
}
