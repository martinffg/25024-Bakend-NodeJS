let contador = 3;
let clave = 1184;
const contenedor = document.querySelector(".misaldo");

function Login()
{
    
    let claveinputeada = parseInt(prompt("Hola que tal, porfavor dijite la clave"));

    if (claveinputeada!==clave)
    {
        contador -= 1;

        if(contador <= 0)
        {
           return AccesoDenegado();
        }

        alert(`Le quedan ${contador} intentos `);
        Login();

    }
    if(claveinputeada === clave)
    {
        return AccesoExitoso();
    }
}

Login();

function AccesoDenegado()
{
    alert("Acceso denegado, porfavor comuniquese con el banco!")
}


function AccesoExitoso()
{
    alert("Acceso Exitoso!");

    
    contenedor.innerHTML= `<p>Saldo: 1000usdt</p>
        <button type="button">RETIRAR</button>
        <button type="button">DEPOSITAR</button>
        <button type="button" id="salir">FINALIZAR</button>` 
    
}
document.addEventListener("DOMContentLoaded", () => 
{
    const botonSalir = document.getElementById("salir");
    botonSalir.addEventListener("click", function()
{
    alert("SALISTE CON EXITO!")
    contenedor.innerHTML = ``
     
})
})