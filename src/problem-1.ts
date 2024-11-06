{
  // Problem 1

  type arrayType = number[];

  const sumArray = (arrayOfNumbers: arrayType): number => {
    const allNumbers = arrayOfNumbers.reduce(
      (previous, current) => previous + current,
      0
    );
    return allNumbers;
  };

  const seeResult = sumArray([1, 2, 3, 4, 5]);
  console.log(seeResult);
}
