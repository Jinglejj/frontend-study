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

// function foo() {
//     console.log(this.a)
// }
// var a = 1
// foo()
  
// const obj = {
//     a: 2,
//     foo: foo
// }
// obj.foo()
  
// const c = new foo()

// console.log(1);
// let a = setTimeout(() => {console.log(2)}, 0);
// console.log(3);
// Promise.resolve(4).then(b => {
// console.log(b);
// clearTimeout(a);
// });
// console.log(5);

// console.log(1&&2>1)
// var datas=[10,20,30];
// datas.unshift(40,50); datas.pop();
// datas.push(60,70); datas.shift();
// console.log(datas.toString());
// var a="30"
// var b=8
// console.log(a%b)


const nums = [1]
var search = function(nums, target) {
    let start=0,end=nums.length-1,mid;
    while(start<=end){
        mid=parseInt((start+end)/2)
        if(nums[mid]===target) {
            break;
        }
        if(nums[mid]<target){
            start=mid+1;
        }
        if(nums[mid]>target){
            end=mid-1;
        }
    }
    if(nums[mid]!==target) return 0;
    let count=1;
    let i=mid-1,len=nums.length;
    while(nums[i]===target&&i>=0){
        i--;
        count++;
    }
    i=mid+1;
    while(nums[i]===target&&i<len){
        i++;
        count++;
    }
    return count;
};

console.log(search(nums,1))


"sdadsa".substring()