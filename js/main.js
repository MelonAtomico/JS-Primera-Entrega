let nameLastname;
const validnameLastname = () => {
    let nameLastname = prompt("Ingrese Nombre y Apellido");
    console.log(nameLastname);
    while ((nameLastname === "") || (!/^[a-zA-Z]+$/.test(nameLastname))) {
        nameLastname = prompt("Datos Mal Ingresados");
    }
    console.log(nameLastname);
    return nameLastname;
}
nameLastname = validnameLastname();
alert ("Hola! " + nameLastname);

alert ("BIENVENIDO AL CALCULADOR DE PORCENTAJES!");
let number = parseFloat( prompt("Ingresar Numero"));
let percent = parseFloat( prompt("Ingresar Porcentaje %"));
let calcPercent = ((number * percent)/100).toFixed(2);
console.log(calcPercent);
alert ("Hola " + nameLastname + "\n\n" + "El " + percent + "% \nDe: " + number + "\nes: " + calcPercent);
