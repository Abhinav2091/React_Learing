import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Reactangle } from "./Rectangle";

let myShape = new Shape(2, 3);
let myCircle = new Circle(2, 3, 5);
let reactangle = new Reactangle(0, 0, 2, 4);

let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(reactangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
}