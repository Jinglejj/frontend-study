function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

// 引用类型的属性被所有实例共享，举个例子
// 在创建 Child 的实例时，不能向Parent传参


function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

// 经典继承
// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参
// 缺点：
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法。


function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);
    
    this.age = age;

}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
// 融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
// 原型式继承
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
// 缺点：
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。


function createObj (o) {
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}

// 寄生式继承
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。


function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);

// 寄生组合式继承
// 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
// 与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。
// 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。