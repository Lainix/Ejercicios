// Ejercicio 1

let str = prompt("Introduce un string");
let substr = prompt('substring');

const contieneSubstring = (str, substr) => {
    let contiene = "";
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < substr.length; j++) {
            if (str[i] == substr[j]) {
                contiene += substr[j];
            }
        }
    }
    if (contiene == substr) {
        console.log("verdadero");
    } else {
        console.log("falso")
    }
}

contieneSubstring(str, substr);