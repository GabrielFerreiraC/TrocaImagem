function TrocarImagem(){

var imagem = document.getElementById("primeira");
if (imagem.src.match("james.jpeg")) {
    imagem.src = "StephenCurry.jpg";
}else {
    imagem.src = "james.jpeg";

}

}
