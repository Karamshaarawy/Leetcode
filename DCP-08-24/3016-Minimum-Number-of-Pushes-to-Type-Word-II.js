/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
let counts = [];
  const uniqueChars = [...new Set(word.split(""))];
  const uniqueWord = uniqueChars.join("");
  for (let i = 0; i < uniqueWord.length; i++) {
    counts.push(word.split(uniqueWord[i]).length - 1);
  }
  let sortable = [];
  for (let i = 0; i < uniqueWord.length; i++) {
    sortable.push(counts[i]);
  }
   counts.sort((a, b) => a - b);
  counts.reverse();
  let ans=0
  for (let i = 0; i < counts.length; ++i) {
    ans += counts[i] * Math.ceil((i + 1) / 8);
  }
  return ans;

};