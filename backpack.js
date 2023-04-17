function isBearable(k,array){
    let somme = array.reduce(function(a,b){
        return a+b;
    })
    if (somme <= k){
        return true
    }
    else {
        return false
    }
}

console.log(isBearable(15,[2,3,1,2,1]))
console.log(isBearable(15,[4,8,3,5,7]))