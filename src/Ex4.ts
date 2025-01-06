class Shape {
    private color: string
    private filled: boolean

    constructor(color: string, filled: boolean) {
        this.color = color
        this.filled = filled
    }

    public getColor(): string {
        return this.color
    }

    public setColor(color: string): void {
        this.color = color
    }

    public isFilled(): boolean {
        return this.filled
    }

    public setFilled(filled: boolean): void {
        this.filled = filled
    }

    public toString(): string {
        return `Shape[color=${this.color}, filled=${this.filled}]`
    }
}

class Circle extends Shape {
    private radius: number = 1.0

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled)
        this.radius = radius
    }

    public getRadius(): number {
        return this.radius
    }

    public setRadius(radius: number): void {
        this.radius = radius
    }

    // คำนวณพื้นที่ของวงกลม
    public getArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }

    // คำนวณเส้นรอบวงของวงกลม
    public getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }

    public toString(): string {
        return `Circle [Shape[color=${this.getColor()}, filled=${this.isFilled()}], radius=${this.getRadius()}]`
    }
}

class Rectangle extends Shape {
    private width: number = 1.0
    private length: number = 1.0

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled)
        this.width = width
        this.length = length
    }

    public getWidth(): number {
        return this.width
    }

    public setWidth(width: number): void {
        this.width = width
    }

    public getLength(): number {
        return this.length
    }

    public setLength(length: number): void {
        this.length = length
    }

    // คำนวณพื้นที่ของสี่เหลี่ยมผืนผ้า
    public getArea(): number {
        return this.width * this.length
    }

    // คำนวณเส้นรอบวงของสี่เหลี่ยมผืนผ้า
    public getPerimeter(): number {
        return 2 * (this.width + this.length)
    }

    public toString(): string {
        return `Rectangle [Shape[color=${this.getColor()}, filled=${this.isFilled()}], width=${this.getWidth()}, length=${this.getLength()}]`
    }
}

class Square extends Rectangle {
    // ขนาดด้านเดียวของสี่เหลี่ยมจัตุรัส
    private side: number

    constructor(side: number, color: string, filled: boolean) {
        super(color, filled, side, side)
        this.side = side
    }

    public getSide(): number {
        return this.side
    }

    public setSide(side: number): void {
        this.side = side
        this.setWidth(side)  // เนื่องจาก Square width และ length เท่ากัน
        this.setLength(side)
    }

    // การคำนวณพื้นที่ของสี่เหลี่ยมจัตุรัส
    public getArea(): number {
        return Math.pow(this.side, 2)
    }

    // การคำนวณเส้นรอบวงของสี่เหลี่ยมจัตุรัส
    public getPerimeter(): number {
        return 4 * this.side
    }

    public toString(): string {
        return `Square [Shape[color=${this.getColor()}, filled=${this.isFilled()}], side=${this.getSide()}]`
    }
}

export = { Shape, Circle, Rectangle, Square }
