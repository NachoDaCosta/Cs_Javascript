function eliminarLetrasRepetidas(array) {
  // Recorrer el arreglo y eliminar las letras contiguas repetidas
  const resultado = array.map((elemento) => {
    let resultadoaux = "";
    let letraAnterior = "";

    for (let i = 0; i < elemento.length; i++) {
      const letraActual = elemento[i];

      if (letraActual !== letraAnterior) {
        resultadoaux += letraActual;
        letraAnterior = letraActual;
      }
    }

    return resultadoaux;
  });

  // Ordenar el arreglo de mayor a menor basado en la longitud de los elementos
  resultado.sort((a, b) => b.length - a.length);

  return resultado;
}

let array = ["ab", "abb", "abbabbabbaa"];
let resultado = eliminarLetrasRepetidas(array);

console.log(resultado);
