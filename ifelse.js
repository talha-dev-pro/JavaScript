//If else statement
let a = "5";
if (a == 5) {
  console.log(a);
} else {
  console.log("a is not 5");
}
//ternary operator
//works like if/else but in a single line
a == 5 ? console.log(a) : console.log("a is not 5");
//Switch statement
switch(a){
    case 5:
        console.log(a+", a is a number");
        break;
    case " ":
        console.log(a+", a is a String");
        break;
    default:
        console.log("dont know a");
        break;
};
