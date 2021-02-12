function ListNode(val) {
    this.val = val;
    this.next = null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// 2. 替换空格
//  题目：请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为 We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy
//  思路：使用正则表达式，结合字符串的 replace 方法将空格替换为 “%20”
//  str.replace(/\s/g,"%20")
function f2(str) {
    const arr = str.split(' ');
    return arr.join('%20')
}


var arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]]

var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length) return false
    var i = 0, j = matrix[0].length - 1
    while (j >= 0) {
        if (matrix[i][j] > target) {
            j--
        } else if (matrix[i][j] < target) {
            i++
        } else if (matrix[i][j] == target) {
            return true
        }
    }
    return false
};

// 调整数组顺序使奇数位于偶数前面
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半
// 部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
var nums = [1, 2, 3, 4]
var exchange = function (nums) {
    if (!nums) return nums
    let i = 0, j = nums.length - 1
    while (i < j) {
        while (i < j && nums[i] % 2 === 1) {
            i++;
        }
        while (i < j && nums[j] % 2 === 0) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    return nums
};


/**
 * 链表中倒数第k个节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    if (!head) return head
    let p = head, q = head
    while (k > 1) {
        q = q.next
        k--
    }
    while (q.next) {
        p = p.next
        q = q.next
    }
    return p
};


/**
 * 合并两个排序的链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let res = new ListNode()
    let p = res
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }
    p.next = l1 ? l1 : l2
    return res.next
};


/**
 * 二叉树镜像
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let temp
var mirrorTree = function (root) {
    if (!root) return root
    if (root.left || root.right) {
        temp = root.left
        root.left = root.right
        root.right = temp
    }
    mirrorTree(root.left)
    mirrorTree(root.right)
    return root
};


/**
 *  顺时针打印矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
const matrix = [[1], [3]]
var spiralOrder = function (matrix) {
    if (!matrix.length) return matrix
    if (matrix.length === 1) return matrix[0]
    if (matrix[0].length === 1) return [].concat(...matrix)
    let li = 0, lj = 0, ri = matrix.length - 1, rj = matrix[0].length - 1;
    let res = []
    while (ri - li > 0) {
        res.push(...matrix[li].slice(li, rj))
        for (let i = li; i <= ri; i++) {
            res.push(matrix[i][rj])
        }
        res.push(...matrix[ri].slice(li + 1, rj).reverse())
        for (let i = ri; i > li; i--) {
            res.push(matrix[i][li])
        }
        li++, lj++, rj--, ri--
    }
    while (lj <= rj) {
        res.push(matrix[li][lj++])
    }
    return res
};

const nums1=[4,1,4,6]
var singleNumbers = function (nums) {
    const obj = {}
    nums.forEach((item, index, nums) => {
        if (obj.hasOwnProperty(item)) {
            obj[item]++
        } else {
            obj[item] = 1
        }
        if (obj[item] > 1) {
            delete obj[item]
            nums.splice(index,1)
        }
    })
    return nums
};

var validateStackSequences = function(pushed, popped) {
    let stack=[],i=0
    pushed.forEach(e=>{
        stack.push(e)
        if(popped[i]===e){
            stack.pop()
            i++
        }
    })
    while(stack.length){
        if(stack.pop()!==popped[i]) {
            return false
        }
        i++
    }
    return true
};

validateStackSequences([2,1,0],[1,2,0])
