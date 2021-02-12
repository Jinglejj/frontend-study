//数组扁平化
var arr = [1, [2, [3, 4]]];

function flatten1(arr) {
    let res = []
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flattenArray(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}

function flatten2(arr) {
    while (arr.some(e => Array.isArray(e))) {
        arr = [].concat(...arr)
    }
    return arr
}

// 数组去重
var arr2 = [NaN, {value: 1}, 1, 2, NaN, {value: 1}, 1, {value: 1}, 1, '1', NaN, NaN]

function unique1(arr) {
    var res = []
    for (var i = 0, len = arr.length; i < len; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}

function unique2(arr) {
    var res = []
    var sortedArray = arr.concat().sort()
    var seen
    for (var i = 0, len = sortedArray.length; i < len; i++) {
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i])
        }
        seen = sortedArray[i];
    }
    return res
}

function unique3(arr) {
    var res = arr.filter((item, index, target) => {
        return target.indexOf(item) === index
    })
    return res
}

function unique4(array) {
    return array.concat().sort().filter(function (item, index, array) {
        return !index || item !== array[index - 1]
    })
}

//typeof item + item ：避免数字1和字符串“1”判断为同一个值
//JSON.stringify ：解决无法区分对象的问题， 如{value: 1} 和 {value: 2} 的 typeof item + item 的结果都会是 object[object Object]
function unique5(arr) {
    var obj = {}
    return arr.filter(item => obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item + item] = true)
}

const unique6 = arr => [...new Set(arr)]

// 方法		                说明
// for循环		        对象和 NaN 不去重
// indexOf		        对象和 NaN 不去重
// sort		            对象和 NaN 不去重 数字 1 也不去重
// filter + indexOf		对象不去重 NaN 会被忽略掉
// filter + sort		对象和 NaN 不去重 数字 1 不去重
// 优化后的键值对方法	    全部去重
// Set                  对象不去重 NaN 去重


// 求最大值最小值
const arr3 = [6, 4, 1, 8, 2, 11, 23]

function Max1(arr) {
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result = Math.max(result, arr[i]);
    }
    return result
}

function Max2(arr) {
    return arr.reduce((prev, next) => Math.max(prev, next))
}

function Max3(arr) {
    arr.sort((a, b) => a < b)
    return arr[arr.length - 1]
}


Math.max.apply(null, arr3)

Math.max(...arr)


//最大公约数
function getMaxCommonDivisor(a, b) {
    if (b === 0) return a
    return getMaxCommonDivisor(b, a % b)
}

//最小公倍数
function getMinCommonMultiple(a, b){
    return a * b / getMaxCommonDivisor(a, b);
}

//实现IndexOf
Array.prototype.myIndexOf=function (val){
    let length = this.length;
    for (let i = 0; i < length; i++) {
        if (this[i] === val) {
            return i;
        }
    }

    return -1;
}

