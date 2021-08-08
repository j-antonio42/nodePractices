// constructor
// resolve = Funcion
// Pasa la promesa de pendiente a resuelto

// reject = Funcion
// Pasa la promesa de pendiente a rechazado

// Pendiente -> resuelto | rechazado

// function construirPared() {
//   // Codigo
//   if (paredConstruida) {
//     return true;
//   } else {
//     return false;
//   }
// }

const promesa = new Promise((resolve, reject) => {
    const todoVaBien = false;
  
    if (todoVaBien) {
      resolve("ok");
    } else {
      reject("something went wrong");
    }
  });
  
  // los objetos de promesa tienen 2 metodos principales
  // - then que se ejectua cuando la promesa se resuelve de forma satisfactoria
  // - catch que se ejecuta cuando la promesa se rechaza
  
  promesa
    .then((resultado) => {
      console.log(resultado); // ok
    })
    .catch((error) => {
      console.error(error); // something went wrong
    });