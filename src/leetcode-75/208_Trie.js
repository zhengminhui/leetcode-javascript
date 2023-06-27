var Trie = function () {
  this.children = {};
};

/**
 * @param {string} word
 * @return {void}
 */
// note0601: nodes= nodes[char] 相当于 json 进入更深的一层
// { a : { p : { p: { l: { e: { isEnd: true}}}}}}
// 如果没有字符，就创建一个 kv object，结束是加一个 boolean 值。
// 这样就能判断 apple 和 app 的区别。
Trie.prototype.insert = function (word) {
  let nodes = this.children;
  for (const char of word) {
    if (!nodes[char]) {
      nodes[char] = {};
    }
    nodes = nodes[char];
  }
  nodes.isEnd = true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// 方便 startsWith 和 search 调用。
Trie.prototype.searchPrefix = function (prefix) {
  let nodes = this.children;
  for (const char of prefix) {
    if (!nodes[char]) {
      return false;
    }
    nodes = nodes[char];
  }
  return nodes;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.searchPrefix(word);
  return node && Boolean(node.isEnd);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.searchPrefix(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
