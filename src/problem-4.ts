{
  // Problem 4

  interface CircleType {
    shape: 'circle';
    radius: number;
  };

  interface RectangleType {
    shape: 'rectangle';
    width: number;
    height: number;
  };

  type stringNum = string | number;
  type AllShape = CircleType | RectangleType;

  function calculateShapeArea(shape: AllShape): stringNum {
    if ('radius' in shape) {
      const multiplyCircle = Math.PI * shape.radius * shape.radius;
      const AreaOfCircle = parseFloat(multiplyCircle.toFixed(2));
      return AreaOfCircle;
    } else if ('width' && 'height' in shape) {
      const AreaOfRectangle = shape.width * shape.height;
      return AreaOfRectangle;
    } else {
      return 'Something Went Wrong';
    }
  }

  const circleArea = calculateShapeArea({ shape: 'circle', radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: 'rectangle',
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);
}
