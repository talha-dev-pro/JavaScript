const change = require("./RefFunc");
//Different Files
let x = 10;
let y = 20;
const updateValue = (num1, num2) => {
  x = num1;
  y = num2;
};
change(updateValue);
console.log(x, y);
