let s='sachinrajaaa'
console.log(s.indexOf(s));
console.log(s.trimStart());
console.log(s.trimEnd());
console.log(s.startsWith(s,0));
console.log(s.charAt(2));
let b=s.charCodeAt(0)-32
console.log(b);
console.log(s.codePointAt(0));//115
console.log(s.repeat(2));//sachinraj   sachinraj

// let c=s.replace(/a/g,'d')//it will create a new container 
//   /a/g,'a' ==>global level replace
// console.log(c)//sdchinrdjddd

// let c=s.replace(/a/gi,'k')       //skchinrkjkkk
// let c=s.replace(/a|s/gi,"t")    //ttchinrtjttt
// let c=s.replace(/a|s/gi,(x)=>{return x.toUpperCase()})    //SAchinrAjAAA
console.log(c);
console.log(s.slice(0,2));//last index is exclude

let set=new Set(s)
console.log(set);//'s', 'a', 'c', 'h', 'i', 'n', 'r', 'j' 