# The significance of union and intersection types in Typescript.

Union and Intersection are one of the most powerful and useful features in typescript which ensures the safety of the code, offers flexibility and provides expressive type definitions which can be very much helpful. 
These Union and Intersection types help to understand where the code is leading.

## Definitions and Usage
If we talk about the definition of Union and Intersection, we can simply say that the Union type is a type that lets a variable hold an outcome among the many outcomes. The Union type which is defined with `|` which means one value would be valid otherwise the function will go for the second value for example: `string | number`. On the other hand the intersection type is a type which captures all the values. It validates that all the values should be in use otherwise it will provide no result. It is defined with `&&` for example: `value A && value B`. 

Let's see some code in action.

```typescript
const getType = (sample: string | number) =>{
if(sample === 'string'){
console.log('I am string')
} else if(sample === 'number'){
console.log('I am a number')
} else{
console.log('I am ERROR 🥴')
}
};
