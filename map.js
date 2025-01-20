const map = (arr, callback) => {
  const newArr = [];
  for (let element of arr) {
    newArr.push(callback(element));
  }
  return newArr;
};
module.exports = map;



