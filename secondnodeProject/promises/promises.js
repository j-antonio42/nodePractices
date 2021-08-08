function construir(muro) {
    // Resultado de funcion
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.construido = true;
  
        if (muro.construido) {
          resolve(muro);
        } else {
          const error = new Error("No se pudo construir");
          reject(error);
        }
      }, 3000);
    });
  }
  
  const promesaDeconstruccion = construir({});
  
  promesaDeconstruccion
    .then((muroConstruido) => {
      console.log("muroConstruido:", muroConstruido);
    })
    .catch((error) => {
      console.error("Ocurrio un error:", error);
    });


function aplanar(muro) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
          muro.aplanado = true;
    
          if (muro.aplanado) {
            resolve(muro);
          } else {
            const error = new Error("No se aplano");
            reject(error);
          }
        }, 3000);
      });
    }
    
    const promesaDeAplanado = aplanar({});
    
    promesaDeAplanado
      .then((muroAplanado) => {
        console.log("muroAplanado:", muroAplanado);
      })
      .catch((error) => {
        console.error("Ocurrio un error:", error);
      });

function pintar(muro) {
     return  new Promise((resolve, reject) => {
         setTimeout(() => {
          muro.pintado = true;
        
          if (muro.pintado) {
              resolve(muro);
             } else {
            const error = new Error("No se pinto");
            reject(error);
           }
           }, 3000);
       });
     }
        
      const promesaDePintado = pintar({});
        
      promesaDePintado 
     .then((muroPintado) => {
       console.log("muroPintado:", muroPintado);
         })
        .catch((error) => {
         console.error("Ocurrio un error:", error);
         });
         