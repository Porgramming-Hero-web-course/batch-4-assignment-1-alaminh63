{
  // Problem 2

  function removeDuplicates (numArray: number[]): number[] {
    const duplicateArray = Array.from(new Set(numArray));
    return duplicateArray;
  };

  const numbersOfDuplicates = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  const joinArray = `(${numbersOfDuplicates.join(', ')})`;
  console.log(joinArray);
}
