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
}