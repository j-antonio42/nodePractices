const ejemploMuro = {
    construido: false,
    aplanado: false,
    pintado: false,
  };
  
  const tiempoDeEspera = 3000;
  
  // declaracion de construir
  function construir(muro, cb) {
    // tiempo de espera
    setTimeout(() => {
      muro.construido = true;
      cb(muro);
    }, tiempoDeEspera);
  }
  
  function aplanar(muro, cb) {
    setTimeout(() => {
      muro.aplanado = true;
      cb(muro);
    }, tiempoDeEspera);
  }
  
  function pintar(muro, cb) {
    setTimeout(() => {
      muro.pintado = true;
      cb(muro);
    }, tiempoDeEspera);
  }
  
  construir(ejemploMuro, (objeto) => {
    console.log("muroConstruido:", objeto);
  });
  
  aplanar(ejemploMuro, (objeto) => {
    console.log("muroAplanado:", objeto);
  });
  
  pintar(ejemploMuro, (objeto) => {
    console.log("muroPintado:", objeto);
  });