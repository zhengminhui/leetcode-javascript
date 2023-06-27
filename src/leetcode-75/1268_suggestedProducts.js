/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
// 先把 products 排序吗
// 然后开始遍历关键词，在遍历内部检查products，如果关键词的 char 和 p 的 char 一致，就保存 p。
var suggestedProducts = function (products, searchWord) {
  const res = [];
  products.sort();

  for (let i = 0; i < searchWord.length; i++) {
    const temp = [];
    products.forEach((p) => {
      if (p[i] === searchWord[i]) {
        temp.push(p);
      }
    });
    // 这里用搜索出来的的结果更新 products，减少数据量
    products = temp;
    // 只取前 3 个，不足的就直接返回。
    res.push(products.slice(0, 3));
  }
  return res;
};
