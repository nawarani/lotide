// Write a program that takes any number of command line arguments,
// all strings, and reverses them before outputting them one at a time to the console

const inputs = process.argv.slice(2);
for (let elem of inputs) {
  let str = '';
  for (let i = (elem.length - 1); i >= 0; i--) {
    str += elem[i];
  }
  console.log(str);
}