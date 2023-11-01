"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(2, 3);
var myCircle = new Circle_1.Circle(2, 3, 5);
var reactangle = new Rectangle_1.Reactangle(0, 0, 2, 4);
var shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(reactangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getInfo());
}
