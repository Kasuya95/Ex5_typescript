class Shape{
    private color: string
    private filled: boolean

    constructor(color: string, filled: boolean){
        this.color = color
        this. filled = filled
    }

    public getColor():string{
        return this.color
    }

    public setColor(color: string):void{
        this.color = color
    }

    public isFilled():boolean{
        return this.filled
    }

    public setFilled(filled: boolean):void{
        this.filled = filled
    }

    public toString():string{
        return `Shape[color=${this.color}, filled=${this.filled}]`
    }
}

class Circle extends Shape{
    private radius: number = 1.0

    constructor(color: string, filled: boolean, radius: number){
        super(color, filled)
        this.radius = radius
    }

    public getRadius():number{
        return this.radius
    }

    public setRadius(radius: number):void{
        this.radius = radius
    }

    public getArea():number{
        return 2
    }

    public getPerimeter():number{
        return 2
    }

    public toString():string{
        return `Circle [Shape[color:${this.getColor}, filled=]]`
    }
}

class Rectangle extends Shape{
    private width: number = 1.0
    private length: number = 1.0

    constructor(color: string, filled: boolean, width: number, length: number){
        super(color, filled)
        this.width = width
        this.length = length
    }

    public getWidth():number{
        return this.width
    }

    public setWidth(width: number):void{
        this.width = width
    }

    public getLength():number{
        return this.length
    }

    public setLength(length: number){
        this.length = length
    }

    public getArea():number{
        return 2
    }

    public getPerimeter():number{
        return 2
    }

    public toString(): string{
        return ``
    }
}

class Square extends Rectangle {
 
    private side: number

    constructor(side: number, color: string, filled: boolean, width: number, length: number){
        super(color, filled, width, length)
        this.side = side
    }

    public getSide(): number{
        return 2
    }

    public setSide(side: number):void{
        this.side = side
    }

    public setWidth(side: number):void{
        this.side = side
    }

    public setLength(side: number):void{
        this.side = side
    }

    public toString(): string {
        return ``
    }
}

export = { Shape, Circle, Rectangle, Square }