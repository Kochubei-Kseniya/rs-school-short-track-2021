function sortByHeight(arr) {
const sort = arr.filter((el) => el !== -1).sort((a, b) => a - b);
let i = 0;
return arr.map((el) => {
if (el !== -1) {
i += 1;
return sort[i - 1];
}
return el;
});
}
 
module.exports = sortByHeight;
