// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Victoria";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1.08;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

//"Return" la string provista: str
function devolverString(str) {
return str;
}
 // Suma "x" e "y" juntos y devuelve el valor
function suma(x, y) {
 let result = x + y
 return result;
}
// Resta "x" de "y" y devuelve el valor
function resta(x, y) {
  let result = x - y
  return result;
}
// Multiplica "x" por "y" y devuelve el valor
function multiplica(x, y) {
 let result = x * y
 return result;
}
 // Divide "x" entre "y" y devuelve el valor
function divide(x, y) {
  let result = x / y
  return result;
}
  // Devuelve "true" si "x" e "y" son iguales
function sonIguales(x, y) {
  if (x === y) {return true
  } else {
    return false
  }
}
  // Devuelve "true" si las dos strings tienen la misma longitud
function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length){
    return true
  } else { 
    return false
  }
}
// Devuelve "true" si el argumento de la función "num" es menor que noventa
function menosQueNoventa(num) {
  if (num < 90) {
    return true
  } else {
    return false
  }
}
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
function mayorQueCincuenta(num) {
  if (num > 50) {
    return true
  } else { 
    return false
  }
}
// Obten el resto de la división de "x" entre "y"
function obtenerResto(x, y) {
  return x / y
}
  // Devuelve "true" si "num" es par
function esPar(num) {
  if (num % 2 === 0) {
    return true
  } else { 
    return false
  }
}
// Devuelve "true" si "num" es impar
function esImpar(num) {
  if (num % 2 !== 0) {
    return true
  } else { 
    return false
  }
}
// Devuelve el valor de "num" elevado al cuadrado
function elevarAlCuadrado(num) {
  return num * num
}
// Devuelve el valor de "num" elevado al cubo
function elevarAlCubo(num) {
  return num * num * num
  
}
// Devuelve el valor de "num" elevado al exponente dado en "exponent"
function elevar(num, exponent) {
  let result = Math.pow(num, exponent)
  return result
}
// Redondea "num" y devuélvelo
function redondearNumero(num) {
  let result = Math.round(num)
  return result
}
 // Redondea "num" hacia arriba y devuélvelo
function redondearHaciaArriba(num) {
 let result = Math.ceil(num)
 return result
  
}
 // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
function agregarSimboloExclamacion(str) {
 let result = str + "!"
 return result
  
}
// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
function combinarNombres(nombre, apellido) {
  let resultado = nombre + " " + apellido;
  return resultado
  
  
}
 // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
function obtenerSaludo(nombre) {
 let str = "Hola " + nombre + "!"
  return str
}
  // Retornar el area de un cuadrado teniendo su altura y ancho
function obtenerAreaRectangulo(alto, ancho) {
 return alto * ancho

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
