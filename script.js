const btnAge = document.querySelector("#sendAge");

btnAge.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    const age = document.querySelector("#age");

    const value = age.value

    if (value >= 18 ) {
        console.log("Você é maior de idade.")
        document.getElementById("resultado").innerHTML = "Você é maior de idade."
    } else {
        console.log("Você é menor de idade.")
        document.getElementById("resultado").innerHTML = "Você é menor de idade."
    } 
});


const btnParImpar = document.querySelector("#sendParImpar");

btnParImpar.addEventListener("click", function(event){
    
    event.preventDefault();

    const num = document.querySelector("#ParImpar");

    const value2 = num.value

    if (value2%2 == 0){
        console.log("Par")
        document.getElementById("resultado2").innerHTML = " É Par."
    } else {
        console.log("Impar")
        document.getElementById("resultado2").innerHTML = " É Impar."
    }
});

const btnZero = document.querySelector("#sendZero");

btnZero.addEventListener("click", function(event){

    event.preventDefault();

    const zero = document.querySelector("#Zero")

    const value3 = zero.value

    if (value3 == 0 ){
        console.log("Zero.")
        document.getElementById("resultado3").innerHTML = "Zero."
    } else if (value3 > 1 ){
        console.log("Número Positivo.")
        document.getElementById("resultado3").innerHTML = "Número Positivo."
    } else {
        console.log("Número Negativo")
        document.getElementById("resultado3").innerHTML = "Número Negativo"
    }

})

