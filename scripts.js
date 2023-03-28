function weather_report() {
    alert ("Loading weather report...")
}
function aceptar_cookies() {
    const eliminar_cookies = document.querySelector(".cookie-policy")
    eliminar_cookies.remove()
}

function seleccion(){
    sel=document.getElementById('temperatura')
    selectedOption=sel.selectedIndex;
    valor=sel.options[selectedOption].value
    console.log(selectedOption)
    if(valor == 'Fahrenheit'){
        to_fahrenheit();
    }
    else{
        to_celsius();
    }
    console.log(valor)

}

function to_fahrenheit(){
    temperaturas= document.querySelectorAll('.temp'); // creamos un arreglo con todos los elementos de la clase temp
    for (var i=0;i < temperaturas.length; i++){
        valor=temperaturas[i].innerHTML
        console.log(valor)
        valor=valor*(9/5)+32;
        temperaturas[i].innerHTML=valor.toFixed(0)
    }
    //valor=t*(9/5)+32;
}

function to_celsius(){
    temperaturas= document.querySelectorAll('.temp'); // creamos un arreglo con todos los elementos de la clase temp
    for (var i=0;i < temperaturas.length; i++){
        valor=temperaturas[i].innerHTML
        console.log(valor)
        valor=(valor-32)*(5/9);
        temperaturas[i].innerHTML=valor.toFixed(0)
    }
    //valor=t*(9/5)+32;
}