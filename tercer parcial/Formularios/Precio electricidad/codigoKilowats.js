document.getElementById("boton").onclick=calcular;
function calcular()
{
    let precioKW = 30
let kilowats = document.getElementById("kilowatsConsumidos").value
let total = precioKW*kilowats
{
    document.write("El total a pagar es de"+total +"pesos");
}
}
