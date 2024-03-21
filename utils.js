export const parseNumberArray = string => {
 const numberRegex = /[-]{0,1}[\d]*[\\.]{0,1}[\d]+/g;
 const numberStrings = string.match(numberRegex);
 const numbers = numberStrings.map(Number);
 return numbers;
}

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}