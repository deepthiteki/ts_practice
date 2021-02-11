var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "red";
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return (this.radius);
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return (this.color);
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return ("color:" + this.color + " and radius:" + this.radius);
    };
    Circle.prototype.getArea = function () {
        return (3.14 * this.radius * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * 3.14 * this.radius);
    };
    return Circle;
}());
var c = new Circle(2.0, "black");
console.log(c.getCircumference());
