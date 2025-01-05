"use strict";
class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}
class Circle extends Shape {
    constructor(color, filled, radius) {
        super(color, filled);
        this.radius = 1.0;
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return 2;
    }
    getPerimeter() {
        return 2;
    }
    toString() {
        return ``;
    }
}
class Rectangle extends Shape {
    constructor(color, filled, width, length) {
        super(color, filled);
        this.width = 1.0;
        this.length = 1.0;
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        return 2;
    }
    getPerimeter() {
        return 2;
    }
    toString() {
        return ``;
    }
}
class Square extends Rectangle {
    constructor(side, color, filled, width, length) {
        super(color, filled, width, length);
        this.side = side;
    }
    getSide() {
        return 2;
    }
    setSide(side) {
        this.side = side;
    }
    setWidth(side) {
        this.side = side;
    }
    setLength(side) {
        this.side = side;
    }
    toString() {
        return ``;
    }
}
module.exports = { Shape, Circle, Rectangle, Square };
