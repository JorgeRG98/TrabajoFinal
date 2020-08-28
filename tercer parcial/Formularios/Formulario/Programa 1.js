document.getElementById("boton").onclick=calcular;
function calcular()
{
    let altura = document.getElementById("altura").value 
    let base = document.getElementById("base").value
    let area = base*altura*.5
    {
        document.write("El area del triangulo es " +area +" centimetros cuadrados");
    }
}