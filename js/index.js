//Botões Cod

var botCezar = document.getElementById("botonCezar")
var botpasos = document.getElementById("Contpasos")

var bot64 = document.getElementById("boton64")

var botAplicar = document.getElementById("aplicar")

//Botões Radio

var botradCod = document.getElementById("radCod")
var botradDes = document.getElementById("radDes")

botpasos.style.display = 'none';


/* ----------------------------------------------------------------------------------------- */

botCezar.addEventListener("click", function(){
    botpasos.style.display = 'flex';
})

botAplicar.addEventListener("click", function(){
    var valorPasos = document.getElementById("numeroPasso").value;
    var codTexto = document.getElementById("espacoText").value;

    var status = document.querySelector("h2#trocaText01")
    var trocaTxt = document.querySelector("h1#textoFinal")
    
    var textSeparado = codTexto.split('')   
    
    if(botradCod.checked){
        
        status.innerHTML = `...Codificando seu texto!`

        var cadenaUnicode = []
        for(i = 0 ; i < textSeparado.length; i++){
            var textoUnicode = textSeparado[i].charCodeAt(textSeparado[i]);
            cadenaUnicode.push(parseInt(textoUnicode))
        }
        var somaUnicode = []
        for(j = 0 ; j < cadenaUnicode.length ; j++){
            somaUnicode.push(parseInt(cadenaUnicode[j]) + parseInt(valorPasos))
        }

        var letraUnicode = []
        for(k = 0 ; k < somaUnicode.length ; k++){
            var letra = String.fromCharCode(somaUnicode[k]);
            letraUnicode.push(letra)
        }

        var letraFinal = ""
        for(l = 0 ; l < letraUnicode.length; l++){
            letraFinal = letraFinal + letraUnicode[l]
        }
        
        trocaTxt.innerHTML = `${letraFinal}`


    }else if(botradDes.checked){

        //Troca Texto - Status

        status.innerHTML = `...Decodificando seu texto!`
    
        //texto codificado unicode

        var txtCodUni = []
        for(i=0 ; i < textSeparado.length; i++){
            var txtCod = textSeparado[i].charCodeAt(textSeparado[i]);
            txtCodUni.push(parseInt(txtCod));
        }
        var restaUni = []
        for(j=0 ; j < txtCodUni.length; j++){
            restaUni.push(parseInt(txtCodUni[j]) - parseInt(valorPasos))
        }
        var letraDes = []
        for(k = 0; k < restaUni.length; k++){
            var letraDU = String.fromCharCode(restaUni[k]);
            letraDes.push(letraDU)
        }
        var letraDesFinal = ""
        for(l=0 ; l < letraDes.length; l++){
            letraDesFinal = letraDesFinal + letraDes[l]
        }

        trocaTxt.innerHTML = `${letraDesFinal}`
    }
    
})


/* -----------------------------------------------------------------------------------
--- */


bot64.addEventListener("click", function(){
    botpasos.style.display = 'none';
   
})

/* ------------------------------------ */