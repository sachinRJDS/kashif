

//priitive data types null,number,boolean,BigInt,symbol,undefined,string
let a=null
let b=375
let c='sachin'
let d=Symbol('sheela is a imaginary girl')
let e=true
let f=BigInt("10")+BigInt("10")
let g=undefined
console.log(a, b, c, d, e, f, g);
console.log(typeof d);


//non primitive datatypes -Object
const register={
    cname:'sachin',
    sal:50000,
    cid:111,
    details:function(){
        console.log(this.cname , this.sal , this.cid);
    }
}
console.log(register['sal']);//array notation
register.details()//dot notation
//these are the two ways to call  object