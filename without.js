// Implement without which will return a subset of a given array,
// removing unwanted elements.
// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const without = (arr, arrtoRemove) => {
//   let arrWithout = arr.slice();
//   let delInd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arrtoRemove.includes(arr[i])) {
//       arrWithout.splice((i - delInd), 1);
//       delInd += 1;
//     }
//   }
//   return arrWithout;
// };

// push method, this is less mind bending
const without = (arr, arrtoRemove) => {
  let arrWithout = [];
  for (let elem of arr) {
    if (!(arrtoRemove.includes(elem))) {
      arrWithout.push(elem);
    }
  }
  return arrWithout;
};

module.exports = without;
