{
    let n=5;
    for(let i=0;i<n;i++){
        let row="";
        for(let j=(n-i);j<n;j++){
            row+="*";
        };
        console.log(row);
    };
    console.log();
    for(let i=0;i<n;i++){
        let row="";
        for(let j=(i+1);j<n;j++){
            row+="*";
        };
        console.log(row);
    };
    console.log();
}