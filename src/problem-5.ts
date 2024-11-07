{
  // Problem 5

  interface PersonType {
    name: string;
    age: number;
  };

  function getProperty<T extends keyof PersonType>(
    PersonObject: PersonType,
    ValueKey: T
  ): PersonType[T] {
    const printResult = PersonObject[ValueKey];
    return printResult;
  }

  const person = { name: 'Alice', age: 30 };
  console.log(getProperty(person, 'name'));
}
