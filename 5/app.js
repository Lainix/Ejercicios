// Ejercicio 5

arrayNumbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];

//Biggest number

var biggestNumb = 0;
for(var i=0; i<arrayNumbers.length; i++){
    if(arrayNumbers[i]> biggestNumb) {
        var biggestNumb = arrayNumbers[i];
    }
}
console.log(biggestNumb);

//Smallest number

var smallestNumb = arrayNumbers[0];
for (var i = 0; i<arrayNumbers.length; i++) {
    if(arrayNumbers[i]< smallestNumb){
        smallestNumb = arrayNumbers[i];
    }
}

console.log(smallestNumb);

//Second biggest numer

var secondBiggest = arrayNumbers[0];
for (var i = 0; i<arrayNumbers.length; i++) {
    if(arrayNumbers[i]> secondBiggest){
        secondBiggest = arrayNumbers[i];
    }

    delete arrayNumbers[4];
}


console.log(secondBiggest);