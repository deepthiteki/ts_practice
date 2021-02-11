class Circle{
    radius:number=1.0;
    color:string= "red";
    
    constructor(radius?:number,color?:string){
        this.radius=radius;
        this.color=color;

    }
    getRadius():number{
        return(this.radius);
    }
    setRadius(radius:number){
        this.radius=radius;
    }
    getColor():string{
        return(this.color);
    }
    setColor(color:string){
        this.color=color;
    }
    toString():string{
        return(`color:${this.color} and radius:${this.radius}`);
    }
    getArea():number
{
    return(3.14*this.radius*this.radius);
}
    getCircumference():number{
        return(2*3.14*this.radius);
    }
}
let c = new Circle(2.0,"black");
console.log(c.getCircumference());
