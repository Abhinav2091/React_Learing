import { Shape } from "./Shape"

export class Rectangle extends Shape {

    constructor(_x: number, _y: number, private _length: number, private _width: number) {
        super(_x, _y);
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return "This is reactangle class";
    }

    calculateArea(): number {
        return this._length * this._width;
    }

}