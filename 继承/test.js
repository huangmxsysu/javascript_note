// function myNew() {

//       var obj = Object.create(null),

//       Constructor = [].shift.call(arguments);

//       obj.__proto__ = Constructor.prototype;

//       var ret = Constructor.apply(obj, arguments);

//       return typeof ret === 'object' ? ret||obj : obj

//   };

// function Ob (age) {
//   this.age = age;
//   return {
//     age:10
//   }
// }

// Ob.prototype.sayAge = function() {
// 	console.log(`i am ${this.age} years old`)
// }

// var person = Object.create(Ob.prototype,18);
// person.sayAge() //i am undefined years old


function deepCopy(p, c) {
　　　
  var c = c || {};　　　　
  for (var i in p) {　　　　　
    if (typeof p[i] === 'object') {　　　　　　　　
      c[i] = (p[i].constructor === Array) ? [] : {};　　　　　　　
      deepCopy(p[i], c[i]);　　　　　　
    } else {
      c[i] = p[i]; 　　　　　　
    }　　　　
  }
  　　　　
  return c;　　
}