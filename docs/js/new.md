# new 操作符

## 让我们了解一下new

::: tip 回顾
创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下 4 个步骤：

1. 创建一个新对象;
2. 继承父类原型上的方法;
3. 添加父类的属性到新的对象上并初始化(this指向);
4. 返回新对象。
   :::

```js
var obj = new Base()
```

new 操作符具体干了什么呢?其实很简单，就干了三件事情。

```js
var obj = {}
obj.__proto__ = Base.prototype
Base.call(obj)
```

第一行，我们创建了一个空对象 obj

第二行，我们将这个空对象的`__proto__`成员指向了 Base 函数对象 prototype 成员对象

第三行，我们将 Base 函数对象的 this 指针替换成 obj

举例

```js
function Person(name) {
  this.name = 'Person'
}
const person = new Person()
// 等同于
let obj = {}
// prototype是函数独有的
obj.__proto__ = Person.prototype
Person.call(obj)

console.log(2, person.__proto__ === obj.__proto__) // true
```

那么，问题来了，一开始我们说的第四步，返回新对象去哪里了？让我们接着看下面的代码

```js
// 我们一般这样写构造函数
function Person(firtName, lastName) {
  this.firtName = firtName
  this.lastName = lastName
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`
}

const p = new Person('Warren', 'E. Buffett')
console.log(p)
// Person { firtName: 'Warren', lastName: 'E. Buffett' }

// 我们给构造函数中添加一个return
function Person(firtName, lastName) {
  this.firtName = firtName
  this.lastName = lastName
  return 'Warren E. Buffett'
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`
}

const p = new Person('Warren', 'E. Buffett')
console.log(p)
// return一个字符串，对构造函数没有影响
// Person { firtName: 'Warren', lastName: 'E. Buffett' }

// 我们用对象试试
function Person(firtName, lastName) {
  this.firtName = firtName
  this.lastName = lastName
  return {
    fullName: 'Warren E. Buffett'
  }
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`
}

const p = new Person('Warren', 'E. Buffett')
console.log(p)
// { fullName: 'Warren E. Buffett' }

// 扩展一下，我们return this会怎样？
function Person(firtName, lastName) {
  this.firtName = firtName
  this.lastName = lastName
  return this
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`
}

const p = new Person('Warren', 'E. Buffett')
console.log(p)
// { fullName: 'Warren E. Buffett' }
```

结论: 当构造函数 return 的是一个对象的时候， 通过 new 操作符实例化的对象 this 指向的是 return, 基本类型或者无return的时候，则返回this

## 让我们来自己实现一个 new

::: tip 简单介绍一下 bind，call，apply
this 的绑定分为五种: 默认绑定（严格/非严格模式）、隐式绑定、显式绑定、new 绑定、箭头函数绑定

其中 bind, call, apply——即显式绑定

apply——接收 2 个参数，('传递给这个函数用来绑定 this 的值', '一个参数数组')

call——接收不定长参数，('传递给这个函数用来绑定 this 的值', '小一', '小二', ...)

bind——call(), apply()是立即调用的，bind()不会，它会生成一个新的函数，参数和 call()一样

```js
var m = {
  x: 1
}
function foo(y, z) {
  console.log(this.x + y + z)
}

foo.apply(m, [5, 6]) // apply 接收数组 会自动展开
foo.call(m, 5, 6) // call 接受可变参数
var foo1 = foo.bind(m)
foo1(5, 6)
```

:::

好了，准备工作完成，我们来着手写一个new

```js
function _new(fn, ...arg) {
  let obj = {}
  obj.__proto__ = fn.prototype
  let result = fn.apply(obj, arg)
  return Object.prototype.toString.call(result) === '[object Object]'
    ? result
    : obj
}

const Person = function (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.getName = function () {
  console.log(this.name)
  return this.name
}

const person = _new(Person, 'xiaoming', '18')
console.log(person)
person.getName()
console.log('--------------')
const person2 = new Person('xiaoming', '18')
console.log(person2)
person2.getName()
/** out:
1 [object Undefined]
Person { name: 'xiaoming', age: '18' }
xiaoming
--------------
Person { name: 'xiaoming', age: '18' }
xiaoming
 * /
```

[Home](/)
