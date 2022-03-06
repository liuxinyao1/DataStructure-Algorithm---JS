/**
 * 在字典中我们可以查找字，字典树可以用来查找单词。
 * 假设单词全部由小写字母组成
 * 根节点不存储字母，设为空。children表示26种不同的子节点：单词首字母
 * 每个节点可以存储一个字母，一个children数组存储若干个子节点（最多26个）
 * 可以使用map or {}，若有删除操作使用map更方便
 * 有相同前缀的单词公用前缀节点
 * 在单词结尾部分标记单词结束：使用一个单独的属性
 * 优点：利用字符串的公共前缀来节约存储空间，最大限度地减少无谓的字符串比较，查询效率比哈希表高。
 */
class Trie {
    constructor() {
        this.root = {}
    }

    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node[ch]) {
                node[ch] = {}; // 子节点不存在
            }
            node = node[ch]; // 节点下移
        }
        node.isEnd = true;// 结束标记
    }

    searchPrefix(prefix) {// 公共前缀
        let node = this.root;
        for (const ch of prefix) {
            if (!node[ch]) {
                return false;
            }
            node = node[ch];
        }
        return node;
    }

    search(word) {
        let node = this.searchPrefix(word);
        if (node && node.isEnd) return true;// 存在前缀 word ，且最后一个节点有结束标记
        return false;
    }
}