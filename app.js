let totalClientes = 0;
let recaudadoTotal = 0;
let totalProductosVendidos = 0;


alert(
  "Bienvenidos a CineStar",
);

//Menu de opciones para los clientes

function mostrarMenuPrincipal() {
    return Number(prompt(
        "------ CINESTAR ------\n" + 
        "--- MENÚ PRINCIPAL ---\n" +
        "1. Atender cliente\n" +
        "2. Ver balance de la jornada\n" +
        "3. Salir del sistema"
    ));
}

function mostrarMenuAreas() {
    return Number(prompt(
        "--- ÁREAS DE VENTA CINESTAR ---\n" +
        "1. Entradas de Cine\n" +
        "2. Confitería y Snacks\n" +
        "3. Combos Especiales\n" +
        "4. Finalizar compra y facturar"
    ));
}

function mostrarMenuEntradas() {
    return Number(prompt(
        "--- ENTRADAS DE CINE CINESTAR ---\n" +
        "1. Entrada General 2D: $12.000\n" +
        "2. Entrada Sala 3D: $16.000\n" +
        "3. Entrada VIP / IMAX: $22.000\n" +
        "4. Volver al menú de áreas"
    ));
}

function mostrarMenuSnacks() {
    return Number(prompt(
        "--- CONFITERÍA Y SNACKS CINESTAR ---\n" +
        "1. Crispetas / Palomitas Grandes: $10.000\n" +
        "2. Gaseosa Grande: $6.000\n" +
        "3. Perro Caliente / Hot Dog: $8.500\n" +
        "4. Volver al menú de áreas"
    ));
}

function mostrarMenuCombos() {
    return Number(prompt(
        "--- COMBOS ESPECIALES CINESTAR ---\n" +
        "1. Combo Personal (Crispeta Mediana + Gaseosa): $13.500\n" +
        "2. Combo Pareja (Crispeta Grande + 2 Gaseosas + Dulce): $24.000\n" +
        "3. Combo Familiar (2 Crispetas Grandes + 3 Gaseosas + 2 Perros): $38.000\n" +
        "4. Volver al menú de áreas"
    ));
}

function calcularDescuento(subtotal) {
    let tieneTarjeta = prompt(
        "------ CINESTAR ------\n" + 
        "¿Tiene Tarjeta CineStar Club? (s/n)") === "s";
    let descuento = 0;

    if (tieneTarjeta) {
        descuento = subtotal * 0.15; // 15% de descuento
    } else {
        let pagoEfectivo = prompt(
            "------ CINESTAR ------\n" + 
            "¿Paga en efectivo? (s/n)") === "s";
        if (pagoEfectivo && subtotal > 30000) {
            descuento = subtotal * 0.05; // 5% de descuento
        }
    }
    return descuento;
}
function gestionarDonacion() {
    let deseaDonar = prompt(
        "------ CINESTAR ------\n" + "¿Desea donar $2.000 para el fondo cinematográfico nacional? (s/n)") === "s";
    return deseaDonar ? 2000 : 0;
}
// Programa principal

let opcionPrincipal = 0;

// Menú Principal
while (opcionPrincipal !== 3) {
    opcionPrincipal = mostrarMenuPrincipal();

    if (opcionPrincipal === 1) {
        let subtotalCliente = 0;
        let opcionArea = 0;

        // Menú de Áreas de Venta
        while (opcionArea !== 4) {
            opcionArea = mostrarMenuAreas();
