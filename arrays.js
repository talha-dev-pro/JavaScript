{
  //Write a code snippet demonstrating the use of the push method to add elements to an array.
  const numarr = [0, 1, 2, 3];
  numarr.push(4);
  console.log("Added thorugh push method: " + numarr);
  //Write a function that takes an array as input and removes the last element using the pop method. Return the modified array.
  const alph = ["a", "b", "c", "d"];
  const rem = (arr) => {
    arr.pop();
    return arr;
  };
  console.log("Removing the last element using pop: " + rem(alph));
  //Create an array of numbers and write code to add a new number to the beginning of the array using the unshift method.
  numarr.unshift(-1);
  console.log("Adding new element on the left: " + numarr);
  //Write a function that takes an array of strings and a target string as input.
  //Use the indexOf method to find the index of the target string in the array.
  //If the target string is not found, return -1.
  const chkindex = (arr, tString) => {
    return arr.indexOf(tString);
  };
  console.log(
    "In Array: " +
      alph +
      " Index of 'b' is using indexOf method: " +
      chkindex(alph, "b")
  );
  //Write a function that takes an array of numbers and a target number as input.
  //Use the includes method to check if the target number exists in the array.
  //Return true if it does, otherwise return false.
  const chkInclude = (arr, num) => {
    return arr.includes(num);
  };
  console.log(chkInclude(numarr, 3));
  //Write a function that takes an array of objects as input.
  //Use array destructuring to extract specific properties from each object
  //and perform some operations based on those properties.
  const obj1 = {
    name: "Ali",
    age: 24,
  };
  const obj2 = {
    name: "Hassan",
    age: 25,
  };
  const obj3 = {
    name: "Adil",
    age: 22,
  };
  const obj4 = {
    name: "Tahir",
    age: 32,
  };
  const arrObj = [obj1, obj2, obj3, obj4];
  const [a, b] = arrObj;
  console.log(a, b);
  const { name } = a;
  const { name2 } = b;
  console.log(name, name2);
}
