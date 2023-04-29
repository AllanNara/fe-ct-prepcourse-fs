/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let result = [];
   for(const property in objeto) {
      result.push([property, objeto[property]])
   }
   return result
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const result = {};
   for(let i = 0; i < string.length; i++) {
      if(result.hasOwnProperty(string[i])) {
         result[string[i]]++
      } else {
         result[string[i]] = 1
      }
   }
   return result
}

function capToFront(string) {
   // const chars = string.split("");
   // const output = [];
   // let index = 0;
 
   // for (let i = 0; i < chars.length; i++) {
   //   if (chars[i] === chars[i].toUpperCase()) {
   //     output.splice(index, 0, chars[i]); // Agrega la letra mayúscula en la posición actual de index
   //     index++; // Incrementa index para que los siguientes caracteres se agreguen después de la letra mayúscula
   //   } else {
   //     output.push(chars[i]); // Agrega la letra minúscula al final del array
   //   }
   // }
 
   // return output.join("");
   ////////////////////////////////
   return string.split('').sort((a, b) => {
      if (a === a.toUpperCase() && b === b.toLowerCase()) {
        return -1; // a debe ser ordenada antes que b
      } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
        return 1; // b debe ser ordenada antes que a
      } else {
        return 0; // no se necesita ordenar a y b entre sí
      }
    }).join('');
 }
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   frase = frase.split(" ");
   frase.forEach((palabra, index) => frase[index] = palabra.split("").reverse().join(""))
   return frase.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numero = numero.toString()
   return numero === numero.split("").reverse().join("") ? "Es capicua" : "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.split("").filter(char => "abcABC".indexOf(char) === -1).join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for(let j = 0; j < arrayOfStrings.length; j++) {
      for(let i = 0; i < arrayOfStrings.length - 1; i++) {
         if(arrayOfStrings[i].length > arrayOfStrings[i + 1].length) {
            let anterior = arrayOfStrings[i]
            let siguiente = arrayOfStrings[i + 1]
            arrayOfStrings[i] = siguiente;
            arrayOfStrings[i + 1] = anterior
         } 
      }
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   // let comun = []
   // for(let i = 0; i < array1.length; i++) {
   //    for(let j = 0; j < array2.length; j++) {
   //       if(array1[i] === array2[j]) {
   //          comun.push(array2[j]);
   //       }
   //    }
   // };
   // return comun
   return array1.filter(element => array2.includes(element));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
