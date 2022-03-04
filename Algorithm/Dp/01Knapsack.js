/**
 *  dp(i,j) :前i个物品,体积是j时的最大价值
 *  v(i),w(i);体积，价值数组:
 *  对第i个物品，有选或者不选两种状态：dp(i)(j) = max(dp(i - 1, j),dp(i - 1,j - v(i)) + w(i));
 *  dp(0,0) = 0;
 *  v 各物品体积 w 各物品价值 vm 背包体积
 */

const resolve = (v, w, vm) => {
    const n = v.length;
    // const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 0; j <= vm; j++) {
    //         dp[i][j] = dp[i - 1][j];
    //         if (j >= v[i]) {
    //             dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - v[i]] + w[i]);
    //         }
    //     }
    // }
    // return dp[n][vm];
    const dp = new Array(vm + 1).fill(0);//滚动数组优化
    for (let i = 0; i < n; i++) {
        for (let j = vm; j >= v[i]; j--) {
            // max -> min 防止无限次调用
            dp[j] = Math.max(dp[j], dp[j - v[i]] + w[i]);
        }
    }
    return dp[vm];// 背包体积为 vm
}