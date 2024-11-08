# The significance of union and intersection types in Typescript.

Union and Intersection are one of the most powerful and useful features in typescript which ensures the safety of the code, offers flexibility and provides expressive type definitions which can be very much helpful. 
These Union and Intersection types help to understand where the code is leading.

## Definitions and Usage
If we talk about the definition of Union and Intersection, we can simply say that the Union type is a type that lets a variable hold an outcome among the many outcomes. The Union type which is defined with `|` which means one value would be valid otherwise the function will go for the second value for example: `string | number`. On the other hand the intersection type is a type which captures all the values. It validates that all the values should be in use otherwise it will provide no result. It is defined with `&` for example: `value A & value B`. 

Let's see some code in action.

## Union Type
```typescript
const getType = (sample: string | number) =>{
  if(typeof sample === 'string'){
     console.log('I am string')
} else if (typeof sample === 'number') {
     console.log('I am a number')
} else {
     console.log('I am ERROR 🥴')
}
  return sample;
};

console.log(getType())
```

## Intersection Type
```typescript
 interface Type1 {
    name: string;
    age: number;
  }

  interface Type2 {
    email: string;
    contactNo: number;
  }

  type AllType = Type1 & Type2;

  const getPersonDetails = (person: AllType): AllType => {
    return person;
  };

  const person = {
    name: 'Alamin',
    age: 23,
    email: 'alamin@gmail.com',
    contactNo: 1121,
  };

  console.log(getPersonDetails(person));
```

To sum up, TypeScript's Union and Intersection types provide powerful tools for improving readability, type safety, and code flexibility. More flexible and adaptive code architectures are made possible by **union types**, which enable handling numerous possible kinds with ease. Conversely, **intersection types** guarantee that combined features are present when required by strictly adhering to numerous type criteria. Developers may produce cleaner, safer, and easier-to-maintain code in TypeScript applications by utilizing these types to generate more expressive and error-resistant type definitions.
