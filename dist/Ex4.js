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
    // คำนวณพื้นที่ของวงกลม
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    // คำนวณเส้นรอบวงของวงกลม
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle [Shape[color=${this.getColor()}, filled=${this.isFilled()}], radius=${this.getRadius()}]`;
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
    // คำนวณพื้นที่ของสี่เหลี่ยมผืนผ้า
    getArea() {
        return this.width * this.length;
    }
    // คำนวณเส้นรอบวงของสี่เหลี่ยมผืนผ้า
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
    toString() {
        return `Rectangle [Shape[color=${this.getColor()}, filled=${this.isFilled()}], width=${this.getWidth()}, length=${this.getLength()}]`;
    }
}
class Square extends Rectangle {
    constructor(side, color, filled) {
        super(color, filled, side, side);
        this.side = side;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
        this.setWidth(side); // เนื่องจาก Square width และ length เท่ากัน
        this.setLength(side);
    }
    // การคำนวณพื้นที่ของสี่เหลี่ยมจัตุรัส
    getArea() {
        return Math.pow(this.side, 2);
    }
    // การคำนวณเส้นรอบวงของสี่เหลี่ยมจัตุรัส
    getPerimeter() {
        return 4 * this.side;
    }
    toString() {
        return `Square [Shape[color=${this.getColor()}, filled=${this.isFilled()}], side=${this.getSide()}]`;
    }
}
module.exports = { Shape, Circle, Rectangle, Square };
