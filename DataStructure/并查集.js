const resolve = (size) => {
    const f = new Array(size);
    const init = () => {
        for (let i = 0; i < size; i++) {
            f[i] = i;//指向自己
        }
    }
    const find = (x) => {//查找 x 所在的集合
        let r = x;
        while ( r !== f[r] ) {
            r = f[r];// 寻找代表元素
        }
        while ( x != r) {
            const temp = f[x];
            f[x] = r;//路径压缩
            x = temp;//移动到下一层
        }
        return r;
    }
    const judge = (x, y) => {
        return find(x) === find(y);
    }
    ////x加入y所在的集合 
    const union = (x, y) {
        let [rx, ry] = [find(x), find(y)];
        if (rx !== ry) f[rx] = ry;
    }
}