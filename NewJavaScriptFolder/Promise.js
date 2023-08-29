console.log('welcome');
// let p=new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         reslove("successfull")
//         reject("failed")
//     }, 2000);
   
// console.log("Thank you");
// })
// p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})


let a=async ()=>{
    console.log("welcome");
    let p=new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove("passs")
        }, 2000);
        
    })
    await p.then((msg)=>{console.log(msg);})
    console.log("Thank you");
}
a()