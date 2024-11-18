import  { createCanvas } from 'canvas'

export const addText = async ({
  width,
  height,
  firstName,
  secondName
}) => {

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  const textHeight = 48;
  const lineSpacing = 20;

  ctx.fillStyle = 'tomato';
  ctx.fillRect(0, 0, width, height);

  ctx.font = `${textHeight}px Bad Script`;
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';

  const totalTextHeight = (2 * textHeight) + lineSpacing;

  const startY = (height - totalTextHeight) / 2 + textHeight;

  ctx.fillText(firstName, width / 2, startY);
  ctx.fillText(secondName, width / 2, startY + textHeight + lineSpacing);

  return canvas.toBuffer();
};
