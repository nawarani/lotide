const takeUntil = (arr, callback) => {
  const newArr = [];
  for (let item of arr) {
    if (!callback(item)) {
      newArr.push(item);
    } else {
      return newArr;
    }
  }
  return newArr;
};

module.exports = takeUntil;