{
  // Problem 7

  class Car {
    public make: string;
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      const thePresentYear = new Date().getFullYear();
      const printRemainingYear = thePresentYear - this.year;
      return printRemainingYear;
    }
  }

  const car = new Car('Honda', 'Civic', 2018);
  car.getCarAge();
}
