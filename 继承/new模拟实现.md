### 基本实现
```js
function myNew() {

    var obj = {},

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    Constructor.apply(obj, arguments);

    return obj;

};

```

### 考虑返回值
```js
// 第二版的代码
function myNew() {

    var obj = {},

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret||obj : obj

};
```
* `var obj = {}`可不可以改成`var obj = new Object()`或者`Object.create(Object.prototype)`呢？

  答案是可以的，只不过后面两种方法有用到new

* 那可不可以改成`Object.create(null)`呢？
  
  那就不行了，因为模拟实现里面修改了__proto__这个隐式原型，之后新创建的结果才会继承定义在原型上prototype上的属性或者方法。如果改成`Object.create(null)`得到的obj是一个没有任何继承关系的空值，并没有隐式的__proto__属性，此时后面当我们执行`obj.__proto__ = Constructor.prototype`的时候，实际上是定义了一个__proto__属性，而不是找到__proto__隐式原型然后修改它。
  
  所以你会发现此时创建的对象无法继承`myNew(Ob)`中定义在Ob.prorotype上的方法或者属性，并且会看到它的__proto__在浏览器中打印出来是深色的而非灰色的，这是因为此时__proto__被当成一个属性，所以无法通过它访问Constructor.prototype，所以也就无法继承定义在Constructor.prototype上的方法或者属性。

  ```js
  function myNew() {
  
      var obj = Object.create(null),
  
      Constructor = [].shift.call(arguments);
  
      obj.__proto__ = Constructor.prototype;
  
      var ret = Constructor.apply(obj, arguments);
  
      return typeof ret === 'object' ? ret||obj : obj
  
  };

  function Ob (age) {}

  Ob.prototype.sayHello = function() {
    console.log('hello')
  }

  var person = myNew(Ob,'18');
  console.log(person)
  person.sayHello() //TypeError: person.sayHello is not a function
  ```

我觉得是不是可以不需要

var obj = {}
obj.__proto__ = Constructor.prototype
直接用

var obj = Object.create(Constructor.prototype)
是一样也可以的吧？

