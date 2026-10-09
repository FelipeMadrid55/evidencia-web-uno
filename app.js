let precio_2D = 12000;
let precio_3D = 16000;
let precio_VIP = 22000;

let precio_crispetas = 10000;
let precio_gaseosa = 6000;
let precio_perro = 8500;

let desc_tajeta = 0.15;
let desc_efectivo = 0.5;
let minimo_desc_efectivo = 30000;
let valor_donacion = 2000;

function formato(valor) {
    return '$' + Math.round(valor).toLocaleString('es-CO');
}

function leerOpcion(mensaje, minimo, maximo) {
    while (true) {
        const texto = String(prompt(mensaje)).trim();
        const numero = Number(texto);
        if (texto !== '' && Number.isInteger(numero) && numero >= minimo && numero <= maximo) {
            return numero;
        }
        console.log(`  ⚠ Opción inválida. Ingrese un número entre ${minimo} y ${maximo}.`);
    }
}

// let combo_personal = precio_crispetas + precio_gaseosa;
// let combo_pareja = precio_crispetas * 2 + precio_gaseosa * 2;

alert(
  "Bienvenidos a CineStar",
);
let repetir = true;
    while (repetir) {
      let opcion = prompt(
        "--------- CineStar --------- \n----- Menú Principal ----- \n1. Atender cliente \n2. Ver balance de la jornada \n3. Salir del sistema",
      );
    }

  function mostrarMenuVentas() {
    console.log("----- Menú Ventas -----");
    console.log("----- CineStar -----");
    console.log("1. Entradas de Cine");
    console.log("2. Confitería y Snacks");
    console.log("3. Combos Especiales");
    console.log("4. Finalizar compra y facturar");
  }
  function mostrarMenuProductos(area) {
    if (area === 1) {
        console.log('\n  >> ENTRADAS DE CINE');
        console.log(`  1. Entrada General 2D: ${formato(PRECIO_2D)}`);
        console.log(`  2. Entrada Sala 3D: ${formato(PRECIO_3D)}`);
        console.log(`  3. Entrada VIP / IMAX: ${formato(PRECIO_VIP)}`);
    }
  }

  function mostrarMenuEntradas(opcion) {
    if (opcion === 1) {
      console.log("----- Menú Entradas -----");
      console.log("----- CineStar -----");
      console.log("1. Entrada 2D");   
  } else if (opcion === 2) {
      console.log("2. Entrada 3D");
  } else if (opcion === 3) {
      console.log("3. Entrada VIP");
  } else if (opcion === 4) {
      console.log("4. Volver al menú anterior");
}
}

    // let opcion = leerOpcion(
    //   "----- Menú ----- \n1. Atender cliente \n2. Ver balance de la jornada \n3. Salir del sistema",
    // );
    
  //   let repetir = true;
  //   while (repetir) {
  //     let opcion = prompt(
  //       "----- Menú ----- \n1. Atender cliente \n2. Ver balance de la jornada \n3. Salir del sistema",
  //     );
  //     if (opcion == 1) {
  //       atenderCliente();
  //     } else if (opcion == 2) {
  //       saldo = retirarDinero(saldo);
  //     } else if (opcion == 3) {
  //       repetir = false;
  //     }
  //   }

  //   function leerOpcion(mensaje, opciones) {
  //     let opcion = prompt(mensaje);
  //     while (!opciones.includes(opcion)) {
  //       alert("Opción inválida. Por favor, ingrese una opción válida.");
  //       opcion = prompt(mensaje);
  //     }
  //     return opcion;
  //   }
  // }

