/**
 * @param s1 匹配串
 * @param s2 模式串
 */
const kmp = (s1, s2) => {
    const n = s1.length;
    const m = s2.length;
    if (!m) return -1;
    const next = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while(j && s2[i] !== s2[j]) {
            // 不匹配 左移
            j = next[j - 1];
        }
        if (s2[i] === s2[j]) ++j;//匹配 右移
        next[i] = j;
    }
    // 开始匹配
    for (let i = 0, j = 0; i < n; i++) {
        while (j && s1[i] !== s2[j]) {
            j = next[j - 1];
        }
        if (s1[i] === s2[j]) ++j;
        if (j === m) return i - m + 1;//返回首个匹配子串的首元素索引
    }
    return -1;
}