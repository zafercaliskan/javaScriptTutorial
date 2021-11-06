function findPrime(...numbers) {
    let nonPrimeNumbers = [];

    numbers.forEach(element => {
        for (let i = 2; i < element; i++) {
            if (element % i == 0) {
                nonPrimeNumbers.push(element);
                break;
            }
        }
    });

    console.log("Prime Numbers: " + numbers.filter(numbers => !nonPrimeNumbers.includes(numbers)))
    console.log("Non Prime Numbers: " + nonPrimeNumbers)
}
findPrime(3, 5)
findPrime(2, 5, 8, 21, 13)