{
    //Ex of Function for passing by reference
    let a=1;
    let b=2;
    console.log(a,b);
    const updateVal=(newA,newB)=>{
        a=newA;
        b=newB;
    };
    const changeVal=(UpdatebyRef)=>{
        UpdatebyRef(3,4);
    };
    changeVal(updateVal);
    console.log(a,b);
    //Write a function that takes two numbers as parameters and returns their sum, using an arrow function.
    const Sum=(num1,num2)=>{
        return num1+num2;
    };
    console.log(Sum(a,b));
    //Create an array of numbers and use the map method with an arrow function to double each number in the array.
    const arr=[0,1,2,3];
    console.log(arr);
    const double=(num)=>{
        return num*2;
    };
    const doubleArr=arr.map(double);
    console.log(doubleArr);
    //Write a function that takes an array of strings and returns a new array 
    //where each string is converted to uppercase using an arrow function.
    const lowerCase=['a','b','c','d'];
    console.log(lowerCase);
    const upperCase=(lowerCase)=>{
        return lowerCase.toUpperCase();
    };
    const UCase=lowerCase.map(upperCase);
    console.log(UCase);
    //Implement a function called filterEvens that takes an array of numbers and returns a new array 
    //containing only the even numbers, using an arrow function with the filter method.
    const random=[1,22,32,554,55,];
    console.log(random);
    const even=(num)=>{
        if(num%2==0){
            return num;
        };
    };
    const arrEven=random.filter(even);
    console.log(arrEven);
    //Create an object representing a person with properties name and age.
    //Write a function that takes an array of such objects and returns an array of their names,
    //using an arrow function with the map method.
    class Person{
        name;
        age;
        constructor(name, age){
            this.name=name;
            this.age=age;
        };
        
    };
    let p1=new Person('Ali',26);
    let p2=new Person('Moosa',25);
    const pArr=[p1,p2];
    const names=(pname)=>{
        return pname.name;
    };
    const nArr=pArr.map(names);
    console.log(nArr);
    //Write a function called getTotalPrice that takes an array of objects representing products
    //(each with name and price properties) and returns the total price of all products,
    //using an arrow function with the reduce method.
    class Products{
        name;
        price;
        constructor(name, price){
            this.name=name;
            this.price=price;
        };
        
    };
    let product1=new Products('Phone',50000);
    let product2=new Products('Laptop',50000);
    const productsArr=[product1,product2];
    const totalPrice= (total, prices) =>{
        return total+=prices.price;
    };
    const productPrices =productsArr.reduce(totalPrice);
    console.log(productPrices); //Not satisfied
    
}