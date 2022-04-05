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

// var controladora

    var suich = '';

/* --------------------------------------------------------- */


botCezar.addEventListener("click", function(){
    botpasos.style.display = 'flex';
    suich = 0;
})

bot64.addEventListener("click", function(){
    botpasos.style.display = 'none';
    suich = 1;
   
})

/*-----------------------------------------------------------------------------------*/

botAplicar.addEventListener("click", function(){

    //pasos cifra de cezar
    var valorPasos = document.getElementById("numeroPasso").value;

    // texto a codificar ou descodificar
    var codTexto = document.getElementById("espacoText").value;

    // Troca text do status
    var status = document.querySelector("h2#trocaText01")

    //troca text do texto final
    var trocaTxt = document.querySelector("h1#textoFinal")
    
    //separador de cada indice de mi string
    var textSeparado = codTexto.split('')   
    
    if(botradCod.checked && suich === 0){
        
        status.innerHTML = `...Codificando seu texto em cifra de cezar!`

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


    }else if(botradDes.checked && suich === 0){

        //Troca Texto - Status

        status.innerHTML = `...Decodificando sua cifra de Cezar a texto!`
    
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
    
    }else if (botradCod.checked && suich === 1){

        status.innerHTML = `...Codificando seu texto a base 64!`

        var textoCod = window.btoa(codTexto)

        trocaTxt.innerHTML = `${textoCod}`


    }else if (botradDes.checked && suich === 1){

        status.innerHTML = `...Decodificando base 64 a texto!`

        var textoDecod = window.atob(codTexto)

        trocaTxt.innerHTML = `${textoDecod}`
    }
    
})


/* ---------------------------------------*/


