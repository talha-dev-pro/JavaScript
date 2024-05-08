{
    //mostly on the right side of the assignment operator
    //usually it is used to expand arrays, making deep copies of arrays
    //for example
    const arr=[0,1,2,3,4];
    const arr2=arr;//here a reference is made, shallow copy
    const arr3 = [...arr];//now this is a deep copy
    arr3[5]=arr;
    arr3[6]=[...arr];
    console.log(arr3);
    const arr4=[10,11,12,...arr];
    console.log(arr4);
    arr4.push(...arr);
    console.log(arr4);
    //spread operator for functions
    const sp=(a,...b)=>{//Rest operator used in parameter to get any amount of arguments in a single variable from function call
        console.log(a,b);
    };
    sp(5,4,3,2,1);
    sp(...arr);//Spread operator for sending large amounts of arguments
    console.log("Functions");
    //Write a function that takes two arrays as input and
    //returns a new array containing all elements from both arrays using the spread operator.
    const join=(array1,array2)=>{
        const joinedArray=[...array1,...array2];//Deep copy
        return joinedArray;
    };
    console.log(join(arr,arr4));
    console.log("Objects");
    const obj1={
        name: "Ali",
        age: 22
    };
    const obj2={
        name: "Hassan",
        age:26,
        obj3:{
            name: "Tahir",
            age: 30
        }
    };
    //Write a function called mergeObjects that takes two objects as input and
    //returns a new object containing all key-value pairs from both objects using the spread operator.
    const mergeObjects=(nobj1,nobj2)=>{
        const mergedObj={nobj1,nobj2};//Deep or Shallow???
        return mergedObj;
    };
    console.log(mergeObjects({...obj1},{...obj2}));
    //Write a function called filterUniqueValues that takes multiple arrays as input and
    //returns a single array containing only unique values from all arrays using the spread operator.
    const filterUniqueValues=(array1,array2)=>{
                
    };









    
    // const obj5={...obj2};
    // const obj4={...obj2,...obj1};
    // console.log(obj4);
    // console.log(obj5);
    // const {...obj6}={...obj1,...obj2};
    // console.log(obj6);
}