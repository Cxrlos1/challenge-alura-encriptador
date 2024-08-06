const textArea = document.querySelector(".form__input");
const imagenMuneco = document.querySelector(".result__img");
const loaderLoading = document.querySelector(".loader");
const resultTittle = document.querySelector(".result__tittle");
const resultText = document.querySelector(".result__text");
const botonEncriptar = document.querySelector(".form__encriptar");
const botonDesencriptar = document.querySelector(".form__desincriptar");
const botonCopiar = document.querySelector(".form__copiar");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function ecriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptarmensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

//ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=> {
    imagenMuneco.style.display = "none";
    loaderLoading.classList.remove("hidden");
    resultTittle.textContent = "Capturando mensaje";
    resultText.textContent = "";
})

//funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = ecriptarmensaje(mensaje);
    resultText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultTittle.textContent = "El resultado es:";
})

//funcion del boton desencriptar
botonDesencriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    resultText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    resultTittle.textContent = "El resultado es:";
})

//funcion boton copiar
botonCopiar.addEventListener("click", ()=> {
    let textoCopiado = resultText.textContent; 
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenMuneco.style.display = "block";
        loaderLoading.classList.add("hidden");
        resultTittle.textContent ="Texto copiado";
        botonCopiar.classList.add("hidden");
        resultText.textContent = "";
    })
})