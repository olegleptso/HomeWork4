function prime (num) {
    let primeNumbersArray = [];

    for (let i = num;i >= 1; i--){
        if (isPrime(i,3)){
            primeNumbersArray.push(i);
        }
    }

    return primeNumbersArray;
}

function isPrime(number, divider) {
    if (number==1)
        return false;
    if (number==2)
        return true;
    if (number % 2 == 0)
        return false;
    if (divider * divider > number){
        return  true;
    }
    else if (number % divider  == 0) {
            return false;
    }
    
    return isPrime(number, divider + 2);
}