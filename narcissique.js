function narcissique(num){
    let str = num.toString()
    let division = str.split('').map(function(a){
        return a**(str.length)
    }).reduce(function(n,p){
        return n+p
    })
    if(division == num){
        return true
    }else{
        return false
    }   
}
console.log(narcissique(153))
console.log(narcissique(1634))