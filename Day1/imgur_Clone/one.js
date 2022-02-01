// const arr=[5,4,3,6,1]

// const output=arr.reduce((acc,curr)=>{
//     return acc+=curr;
// })
// console.log(output);

var arr=['masai','school','masai','school','account'];

const output=arr.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr]=++acc[curr]
    }else{
        acc[curr]=1;
    }
    return acc
},{})

console.log(output);
