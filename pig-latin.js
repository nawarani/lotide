// node pig-latin.js pig latin
// igpay atinlay

const inputs = process.argv.slice(2);
let str = '';
for (let elem of inputs) {
  str += elem.slice(1) + elem[0] + 'ay' + ' ';
}
console.log(str.slice(0, -1));