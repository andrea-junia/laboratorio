function fChange() {
const myNodelist = document.querySelectorAll("body");   
console.log(myNodelist)  
    if (document.getElementById("bttlgg").innerHTML == 'BR') {
        document.getElementById("bttlgg").innerHTML = "EN";
        document.getElementById("banh1").innerHTML = "Olá Mundo! Eu Sou";
        document.getElementById("edc").innerHTML = edcBR; 
        document.getElementById("exp").innerHTML = expBR; 
        document.getElementById("ed1").innerHTML = ed1BR; 
        document.getElementById("ed2").innerHTML = ed2BR;
        document.getElementById("ed3").innerHTML = ed3BR;
        document.getElementById("ed4").innerHTML = ed4BR;
        document.getElementById("ex1").innerHTML = ex1BR; 
        document.getElementById("ex2").innerHTML = ex2BR;
        document.getElementById("ex3").innerHTML = ex3BR;
        document.getElementById("ex4").innerHTML = ex4BR;
        document.getElementById("me").innerHTML = cAboutBR; 
    } else {
        document.getElementById("bttlgg").innerHTML = "BR";
        document.getElementById("banh1").innerHTML = "Hello World! I'm";
        document.getElementById("edc").innerHTML = edcEN;
        document.getElementById("exp").innerHTML = expEN; 
        document.getElementById("ed1").innerHTML = ed1EN;
        document.getElementById("ed2").innerHTML = ed2EN;
        document.getElementById("ed3").innerHTML = ed3EN;
        document.getElementById("ed4").innerHTML = ed4EN;
        document.getElementById("ex1").innerHTML = ex1EN; 
        document.getElementById("ex2").innerHTML = ex2EN;
        document.getElementById("ex3").innerHTML = ex3EN;
        document.getElementById("ex4").innerHTML = ex4EN;
        document.getElementById("me").innerHTML = cAboutEN;
    }    
}