var a={
cname:'sachin',
sal:40000,
organization:"TYSS"
}

console.log(a);
a['address']='kattreguppe'//here we can also add the property to object
delete a['address']// here we are deleting the property
console.log(a);

//a='sachin' //here initializeing the new value to an object then it will holding the new value not a old property with respect to var and let in const will get error
a={}
// console.log(a);//sachin
console.log(a);//{}

console.log(45/10);//4.5
console.log(Math.trunc(45/10));//4

