const arith=function (a,b,operation){
    if(operation=="sub"){
        return a-b
    }else if(operation=="add"){
        return a+b
    }else if(operation=="mul"){
        return a*b
    }else if(operation=="div"){
        return a/b
    }
    return "enter only numbers"
}
console.log("welcome");
console.log(arith(2,3,"div"));

