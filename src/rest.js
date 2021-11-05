function add(...numbers) { //Rest: rest'i hep sonra bırakın başka paramtere varsa.
    console.log(numbers)
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total)
}

add(20, 30);
add(20, 30, 40);
add(20, 30, 40, 50);

function add2(bisey, ...numbers) {  //örneğin.
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(bisey)
    console.log(total)
}

add2(20, 30, 40, 50);