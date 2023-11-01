import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let circle = new Circle(0, 0, 4);
let rectangle = new Rectangle(0, 0, 2, 8);

let shapes: Shape[] = [];
shapes.push(circle);
shapes.push(rectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
