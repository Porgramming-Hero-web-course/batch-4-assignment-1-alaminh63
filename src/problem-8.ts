{
  // Problem 8

  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]) {
    const findIsResultTrue = keys.every(key => key in obj);
    return findIsResultTrue;
  }

  const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
  console.log(validateKeys(person, ['name', 'age']));
}
