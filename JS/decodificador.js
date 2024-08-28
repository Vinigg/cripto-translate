const botaoCodificar = document.getElementsByClassName("button-um")[0];
const botaoDecodificar = document.getElementsByClassName("button-dois")[0];
const texto = document.getElementsByClassName("texto__cru")[0];
const imagem = document.getElementsByClassName("img__decodificador")[0];
const textoDecodificado = document.getElementsByClassName("texto__decodificado")[0];


/*
  To DO
  - Mudar disabled para "reduzido", para que o usuário possa clicar no textarea.
*/
function mostrarTextoCriptografado(){
  if(texto.value == ''){
    alert('Digite um texto para ser codificado');
    imagem.classList.remove("disabled");
    textoDecodificado.classList.add("disabled");
    return;
  }else{
    imagem.classList.add("disabled");
    textoDecodificado.classList.remove("disabled");
    textoDecodificado.value = criptografarTexto();
  } 
}

function mostrarTextoDescriptografado(){
  if(textoDecodificado.value == ''){
    alert('Digite um texto para ser decodificado');
    imagem.classList.remove("disabled");
    return;
  }else{
    texto.value = descriptografarTexto(textoDecodificado.value);
  }
}

function descriptografarTexto(textoCifrado) {
  // Criamos um objeto para mapear as substituições
  const substituicoes = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u'
  };

  // Percorremos o texto, procurando pelas chaves e substituindo
  let textoDescriptografado = textoCifrado;
  for (const chave in substituicoes) {
    textoDescriptografado = textoDescriptografado.replaceAll(chave, substituicoes[chave]);
  }

  return textoDescriptografado;
}

function criptografarTexto(){
  let textoCodificado = '';
  for(let i = 0; i < texto.value.length; i++){
    console.log(texto.value[i])
    if (texto.value[i] == 'a'){ 
      textoCodificado += 'ai';       
    }else if(texto.value[i] == 'e'){
      textoCodificado += 'enter';
    }else if(texto.value[i] == 'i'){
      textoCodificado += 'imes';
    }else if(texto.value[i] == 'o'){
      textoCodificado += 'ober';
    }else if(texto.value[i] == 'u'){
      textoCodificado += 'ufat';
    }else{
      textoCodificado += texto.value[i];
    }    
  }
  return textoDecodificado.value = textoCodificado;
}

// Adicionando um evento de clique
botaoCodificar.addEventListener("click", () => mostrarTextoCriptografado());
botaoDecodificar.addEventListener("click", () => mostrarTextoDescriptografado());