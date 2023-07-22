function calculateArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
    // Handle invalid input: return undefined or throw an error, depending on the requirement.
    return undefined;
  }

  const area = length * width;
  return area;
}

const length = 5;
const width = 3;
const area = calculateArea(length, width);
console.log(area); // Output: 15
