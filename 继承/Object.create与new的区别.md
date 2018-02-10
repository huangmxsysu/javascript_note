### new 与 Object.create()的区别
```js
let foo = function(){
  this.name = 'aven'
  console.log('excute the foo constructor')
}
foo.prototype.sayName = function(){
  console.log(`i am ${this.name}`)
}
let test1 = new foo()
console.log('========')
let test2 = Object.create(foo.prototype)
test1.sayName()
test2.sayName()
//excute the foo constructor
//========
//i am aven
//i am undefined
```

简单理解为
```js
let o = new O()
//等价于
let o = Object.create(O.prototype)
//等价于
let o = {}
//但不等价于
let o = Object.create(null)
```
## new(Ob)
new做了5件事：
* 创建一个type为object的简单对象o
* 将o.__proto__属性指向Ob.prorotype即Ob的原型对象
* 将this变量指向这个新创建的对象o
* 执行Ob的构造函数constructor
* 返回新对象，如果构造函数返回值(typeof 返回值 !== 'object' 且不为null的值),则返回新建对象o，如果构造函数返回一个对象，则返回该返回值

## Object.create(Ob.prototype)
Object.create做了new的前三件事，而没有执行Ob的构造函数，所以你会发现他不能继承Ob构造函数中的属性或者方法，只能继承Ob.prototype定义的方法
```js
function Ob (age) {
  this.age = age;
  return {
    age:10
  }
}

Ob.prototype.sayAge = function() {
	console.log(`i am ${this.age} years old`)
}

var person = Object.create(Ob.prototype,18);
person.sayAge() //i am undefined years old
```

其实Object.create简单的理解就是
```js
var obj = {}
obj.__proto__ = Constructor.prototype
return obj;
```
等价于
```js
var obj = Object.create(Constructor.prototype)
```
Object.create的简单polyfill：
```js
Object.create = function (proto, propertiesObject) {
    function F() {}
    F.prototype = proto;
    return new F();
};
```

参考链接：

[Understanding the difference between Object.create() and new SomeFunction()
](https://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction/4166723#4166723)

[What is the 'new' keyword in JavaScript?
](https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript/3658673#3658673)