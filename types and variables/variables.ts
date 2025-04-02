let apples: number = 5;
let speed: string = "km/h";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//construído objetos

let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"]; //conchetes indica que é um array
let myNumbers: number[] = [1, 2, 16, 26];
let trurhs: boolean[] = [true, false, false, true];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
