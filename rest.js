{  //storing multiple items in a single variable
     //Destructuring
    const arr=[1,2,3,4,5,6];
    const [one, two, ...rest]=arr;//left side of assignment operator
    console.log(one,two,rest);
    const sp=(a,...b)=>{//Rest operator used in parameter to get any amount of arguments in a single variable from function call
        console.log(a,b);
    };
    sp(5,4,3,2,1);
}