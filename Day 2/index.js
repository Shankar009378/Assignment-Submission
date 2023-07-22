function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    // Handle invalid input: return undefined or throw an error, depending on the requirement.
    return undefined;
  }

  let max = numbers[0]; // Assume the first element is the maximum initially.

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Update the max value if we find a larger element.
    }
  }

  return max;
}

const numbers = [3, 7, 1, 9, 2, 5];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 9
