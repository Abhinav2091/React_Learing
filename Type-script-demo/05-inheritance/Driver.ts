import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Reactangle } from "./Rectangle";

let myShape = new Shape(2, 3);
console.log(myShape.getInfo());

let myCircle = new Circle(2, 3, 5);
console.log(myCircle.getInfo());

let reactangle = new Reactangle(0, 0, 2, 4);
console.log(reactangle.getInfo());