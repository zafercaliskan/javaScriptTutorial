function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

let primeNumbers = [];
for (let i = 0; i < 1000; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}

console.log("Prime Numbers (0-1000): " + primeNumbers)