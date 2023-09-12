const string = "arriba dark souls";

function code(letras) {
    if (letras === '') {
      return '';
    }
    function contar(cadena, contador) {
      if (cadena[0] !== cadena[1] || cadena.length === 1) {
        return contador + cadena[0] + code(cadena.slice(1));
      }
      return contar(cadena.slice(1), contador + 1);
    }
    return contar(letras, 1);
  }
  console.log(code(string))