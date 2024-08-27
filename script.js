const libState = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  
  const codificar = () => {
    const texto = document.getElementById("valor-texto").value;
    const textoCodificado = texto.split("").map((letra) => {
      if (libState[letra]) {
        return libState[letra];
      } else {
        return letra;
      }
    });
    Array.from(document.getElementsByClassName("grupo1")).forEach((element) => {
      element.classList.add("oculto");
    });
  
    document.getElementById("btn3").classList.remove("oculto");
    document.querySelector(".div-resultado").classList.remove("oculto");
    document.getElementById("out").classList.add("box-aut");
  
    document.getElementById("resultado").innerText = textoCodificado.join("");
  };
  
  const decodificar = () => {
    let texto = document.getElementById("valor-texto").value;
    const cifras = Object.values(libState);
  
    cifras.forEach((cifra) => {
      texto = texto.replaceAll(
        cifra,
        Object.keys(libState)[cifras.indexOf(cifra)]
      );
    });
  
    Array.from(document.getElementsByClassName("grupo1")).forEach((element) => {
      element.classList.add("oculto");
    });
  
    document.getElementById("btn3").classList.remove("oculto");
    document.querySelector(".div-resultado").classList.remove("oculto");
    document.getElementById("out").classList.add("box-aut");
  
    document.getElementById("resultado").innerText = texto;
  };
  
  const copiar = () => {
    let texto = document.getElementById("resultado").innerText;
  
    const inputTemporario = document.createElement("input");
    inputTemporario.value = texto;
    document.body.appendChild(inputTemporario);
  
    inputTemporario.select();
    document.execCommand("copy");
  
    document.body.removeChild(inputTemporario);
  };
  
  document.getElementById("btn3").addEventListener("click", copiar);
  document.getElementById("btn1").addEventListener("click", codificar);
  document.getElementById("btn2").addEventListener("click", decodificar);