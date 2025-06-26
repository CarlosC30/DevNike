


let imgTenis = document.getElementById("img-tenis");

function mudarVisual(cor, imagem) {
    if (!imgTenis) {
        console.error("Elemento img-tenis não encontrado!");
        return;
    }

    imgTenis.classList.add("troca-efeito");
    document.body.style.backgroundColor = cor;

    if (imagem) {
  
    }
    setTimeout(() => {
        imgTenis.classList.remove("troca-efeito");
         imgTenis.src = imagem;
       
    }, 500);




}