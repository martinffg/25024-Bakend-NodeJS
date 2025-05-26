// Cajero Automático

let pinCorrecto = 1234; // PIN válido
let intentos = 0;
let accesoConcedido = false;
let saldo = 1000; // Saldo inicial

// 1 - Mensaje de bienvenida
alert("Bienvenido al Cajero Automático");

// 2 - Hasta 3 intentos de ingreso
while (intentos < 3 && !accesoConcedido) {
  let pinIngresado = parseInt(prompt("Ingrese su PIN:"));

  if (pinIngresado === pinCorrecto) {
    accesoConcedido = true;
    alert("Acceso concedido. Bienvenido.");
  } else {
    intentos++;
    alert("Datos incorrectos. Intento: " + intentos);
  }
}

// 2b - Si se agotan los intentos
if (!accesoConcedido) {
  alert("Ha superado los intentos permitidos. Contacte a su banco.");
} else {
  let opcion = "";

  // 3 - Menú que se repite hasta que elija "d"
  while (opcion !== "d") {
    let menu = "Seleccione una opción:\n";
    menu += "a - Consultar Saldo\n";
    menu += "b - Retiro\n";
    menu += "c - Depósito\n";
    menu += "d - Salir";

    opcion = prompt(menu);

    if (opcion === "a") {
      alert("Su saldo actual es: $" + saldo);
    } else if (opcion === "b") {
      let retiro = parseInt(prompt("Ingrese monto a retirar:"));
      if (retiro > 0 && retiro <= saldo) {
        saldo -= retiro;
        alert("Retiro exitoso. Saldo restante: $" + saldo);
      } else {
        alert("Monto inválido o saldo insuficiente.");
      }
    } else if (opcion === "c") {
      let deposito = parseInt(prompt("Ingrese monto a depositar:"));
      if (deposito > 0) {
        saldo += deposito;
        alert("Depósito realizado. Saldo actual: $" + saldo);
      } else {
        alert("Monto inválido.");
      }
    } else if (opcion === "d") {
      alert("Gracias por usar el cajero.");
    } else {
      alert("Opción inválida.");
    }
  }

  // 4 - Mensaje final
  alert("Operación finalizada. Retire su tarjeta.");
}

