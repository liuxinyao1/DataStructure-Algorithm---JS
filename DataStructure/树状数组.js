const resolve = (nums) => {// index [1, ...]
    nums.unshift(0);
    const n = nums.length;
    const cTree = new Array(n).fill(0);//树状数组
    const lowbit = (i) => (i) & (-i);
    const add = (i, v) => {
        // 节点 i， + v
        for (let j = i; j <= n; j += lowbit(j)) {
            cTree[j] += v;
        }
    }
    const init = () => {
        for (let i = 1; i < n; i++) {
            add(i, nums[i]);//初始化 cTree 数组
        }
    }
    // 区间和 [1, i]
    const query = (i) => {
        let sum = 0;
        for (let j = i; j >= 1; j -= lowbit(j)) {
            sum += cTree[j];
        }
        return sum;
    }
}