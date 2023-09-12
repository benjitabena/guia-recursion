const word = "hola"

function pal(palabra) {
    if (palabra.length <= 1) {
      return true;
    }
    if (palabra[0] !== palabra[palabra.length - 1]) {
      return false;
    }
    return pal(palabra.slice(1, palabra.length - 1));
  }
  console.log(pal(word));