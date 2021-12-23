function fInicio() {
    fChange(document.getElementById("bttlgg").innerHTML = "BR");
}

function fChange() { 
    if (document.getElementById("bttlgg").innerHTML == 'BR') {
        
        document.getElementById("bttlgg").innerHTML = "EN";
        document.getElementById("banh1").innerHTML = "Olá Mundo! Eu Sou";

        document.getElementById("me1").innerHTML = cAboutBR1; 
        document.getElementById("me2").innerHTML = cAboutBR2; 
        document.getElementById("me3").innerHTML = cAboutBR3; 

        document.getElementById("edc").innerHTML = edcBR; 
        document.getElementById("exp").innerHTML = expBR;

        document.getElementById("edc1").innerHTML = edc1BR;
        document.getElementById("edc2").innerHTML = edc2BR;
        document.getElementById("edc3").innerHTML = edc3BR;
        document.getElementById("edc4").innerHTML = edc4BR;
        document.getElementById("edc5").innerHTML = edc5BR;
        document.getElementById("edc6").innerHTML = edc6BR;
        document.getElementById("edc7").innerHTML = edc7BR;
        document.getElementById("edc8").innerHTML = edc8BR;

        document.getElementById("exp1").innerHTML = exp1BR;
        document.getElementById("exp2").innerHTML = exp2BR;
        document.getElementById("exp3").innerHTML = exp3BR;
        document.getElementById("exp4").innerHTML = exp4BR;
        document.getElementById("exp5").innerHTML = exp5BR;
        document.getElementById("exp6").innerHTML = exp6BR;
        document.getElementById("exp7").innerHTML = exp7BR;
        document.getElementById("exp8").innerHTML = exp8BR;
        document.getElementById("exp9").innerHTML = exp9BR;
        document.getElementById("exp10").innerHTML = exp10BR;        

    } else {
        document.getElementById("bttlgg").innerHTML = "BR";
        document.getElementById("banh1").innerHTML = "Hello World! I'm";

        document.getElementById("me1").innerHTML = cAboutEN1; 
        document.getElementById("me2").innerHTML = cAboutEN2; 
        document.getElementById("me3").innerHTML = cAboutEN3; 

        document.getElementById("edc").innerHTML = edcEN;
        document.getElementById("exp").innerHTML = expEN;

        document.getElementById("edc1").innerHTML = edc1EN;
        document.getElementById("edc2").innerHTML = edc2EN;
        document.getElementById("edc3").innerHTML = edc3EN;
        document.getElementById("edc4").innerHTML = edc4EN;
        document.getElementById("edc5").innerHTML = edc5EN;
        document.getElementById("edc6").innerHTML = edc6EN;
        document.getElementById("edc7").innerHTML = edc7EN;
        document.getElementById("edc8").innerHTML = edc8EN;

        document.getElementById("exp1").innerHTML = exp1EN;
        document.getElementById("exp2").innerHTML = exp2EN;
        document.getElementById("exp3").innerHTML = exp3EN;
        document.getElementById("exp4").innerHTML = exp4EN;
        document.getElementById("exp5").innerHTML = exp5EN;
        document.getElementById("exp6").innerHTML = exp6EN;
        document.getElementById("exp7").innerHTML = exp7EN;
        document.getElementById("exp8").innerHTML = exp8EN;
        document.getElementById("exp9").innerHTML = exp9EN;
        document.getElementById("exp10").innerHTML = exp10EN;
    }    

}
