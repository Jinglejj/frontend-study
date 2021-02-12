function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const index = inorder.findIndex(e => e === root.val);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};


var verifyPostorder = function (postorder) {
    const lastItem = postorder.pop();
    if (!postorder.length) return true;
    const index = postorder.findIndex(e => e > lastItem);
    let left, right;
    if (index === -1) {
        left = postorder;
        right = [];
    } else {
        left = postorder.slice(0, index);
        right = postorder.slice(index);
    }

    if ((left.length && left.some(e => e > lastItem)) || (right.length && right.some(e => e < lastItem))) {
        return false;
    }
    return verifyPostorder(left) && verifyPostorder(right);
};

var minNumber = function (nums) {
    return nums.sort((a, b) => parseInt(`${a}${b}`) - parseInt(`${b}${a}`)).join('')

};


// function get() {
//     const obj=Array.prototype.shift.call(arguments);
//     const res=[];
//     for(let i=0,len=arguments.length;i<len;i++){
//         const arr=arguments[i].split('.');
//         let val=obj[arr[0]];
//         for(let i=1,len=arr.length;i<len;i++){
//             if(!val) break;
//             val=val[arr[i]];
//         }
//         res.push(val);
//     }
//     return res;
// }
// const obj = {  selector: {  to: {  toutiao: 'FE coder'  }  },  target: {  name: 'byted'  } }


var permuteUnique = function (nums) {
    const res = [];
    const trace = [];
    const used=[];

    function backtrace() {
        if (trace.length === nums.length) {
            res.push([...trace]);
        }
        for (let i = 0, len = nums.length; i < len;i++) {
            if(used[i]) continue;
            if(i>0&&nums[i]===nums[i-1]&&!used[i-1]) continue;
            trace.push(nums[i]);
            used[i]=true;
            backtrace();
            trace.pop();
            used[i] = false;
        }
    }

    backtrace();
    return res;
};

function maxLength( arr ) {
    if(arr.length===1) return 1;
    const select=new Set();
    select.add(arr[0]);
    let opt=1;
    for(let i = 1,len=arr.length;i<len;i++){
        if(select.has(arr[i])){
            select.clear();
        }
        select.add(arr[i]);
        opt=Math.max(opt,select.size);
    }
    return opt;
}
console.log(maxLength([2,2,3,4,3,4]))
