function divisibleTest(n){
    let count = 0
    if(n>0.9 && typeof(n) === 'number'){
        for(let i = 0; i<n; i++) {
            if((n-i)%3 === 0 || (n-i)%5 === 0) {
                count = count + 1;
            }
        }
        return count
    } else {
        return("error")
    }
}

console.log(divisibleTest(4));