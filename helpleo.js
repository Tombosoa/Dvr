function help(n,array){
    let count = 0
    let grow = array.sort(function(a,b){
        return a - b
    })
    for (let i = 0; i < grow.length; i++){
        n = n - grow[i]
        if (n < 0){
            break
        }
        else{
            count++
        }
    }
    return count
}
console.log(help(20,[13,2,4,6,1]))
console.log(help(40,[20,3,7,12,8,9]))