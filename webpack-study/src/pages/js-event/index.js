let btn=document.getElementById("btn");
let a=document.getElementById("baidu");
/**
 * DOM事件对象(event)
 * 属性：
 * bubble 是否冒泡
 * cancelable 是否可取消
 * detail 事件其它信息
 * currentTarget 事件处理程序当前所在的元素
 * target 事件目标元素
 * eventPhase 时间处理程序所处阶段(捕获阶段==>到达目标==>冒泡阶段)
 * preventDefault() 取消默认的事件行为
 * stopPropagation() 阻止后续事件捕获或者冒泡
 * type 事件类型 ckick mouseout mouseover....
 *
 *
 * 当eventPhase = 2 时  this===currentTarget===target
 */
const eventPhaseMap={
    1:'事件处理程序在捕获阶段调用',
    2:'事件处理程序在目标上调用',
    3:'事件处理程序在冒泡阶段调用',
}

a.onclick=function (e){
    console.log(e.eventPhase,eventPhaseMap[e.eventPhase]);
    e.preventDefault();//取消默认事件行为
}
// btn.onclick=function(e){
//     console.log(e.eventPhase,eventPhaseMap[e.eventPhase]);
//     // e.stopPropagation() //取消后续事件的捕获或冒泡
//     console.log("阻止事件的传播")
// }
//
// document.body.addEventListener('click',(e)=>{
//     console.log(e.eventPhase,eventPhaseMap[e.eventPhase]);
// },true);// true表示事件处理程序在捕获阶段被调用
//
//
// document.body.onclick=function(e){
//     console.log(e.eventPhase,eventPhaseMap[e.eventPhase]);
//     console.log("body的点击事件");
// }


/**
 * IE事件对象
 * event是window对象的一个属性
 * 属性：
 * cancelBubble 设置为true取消冒泡
 * returnValue 设置false可取消默认行为
 * srcElement 事件目标
 * type 事件类型
 */

let btn2=document.getElementById("btn2");

btn2.onclick=function (){
    let e=window.event;
    console.log(e.type)
}

btn2.attachEvent("onclick",()=>{
    console.log(window.event.type);
})



