// function test(person) {
//   person.age = 26
//   person = {
//     name: 'yyy',
//     age: 30
//   }

//   return person
// }
// const p1 = {
//   name: 'yck',
//   age: 25
// }
// const p2 = test(p1)
// console.log(p1) // { name: 'yck', age: 26 }
// console.log(p2) // { name: 'yyy', age: 30 }

function foo() {
    console.log(this.a)
}
var a = 1
foo()
  
const obj = {
    a: 2,
    foo: foo
}
obj.foo()
  
const c = new foo()