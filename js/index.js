
//Botões para Codificar

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

    // texto a codificar ou decodificar
    var codTexto = document.getElementById("espacoText").value;

    // Troca text do status
    var status = document.querySelector("h2#trocaText01")

    //troca text do texto final
    var trocaTxt = document.querySelector("h1#textoFinal")
    
    //separador de cada indice de mi string

    var textSeparado = codTexto.split('')
    
    if(botradCod.checked && suich === 0){
        
        status.innerHTML = `...Codificando seu texto em cifra de cezar!`

        //separación de cada letra dentro de mi frase
        var cadenaUnicode = []
        for(i = 0 ; i < textSeparado.length; i++){
            var textoUnicode = textSeparado[i].charCodeAt(textSeparado[i]);
            cadenaUnicode.push(parseInt(textoUnicode))
        }
        
        //Soma do incremento
        var somaUnicode = []
        for(j = 0 ; j < cadenaUnicode.length ; j++){
            
            if(cadenaUnicode[j] === 32){
                somaUnicode.push(parseInt(cadenaUnicode[j]));

            }else if(cadenaUnicode[j] >= 65 && cadenaUnicode[j] <= 90){
                somaUnicode.push(((cadenaUnicode[j] - 65 + parseInt(valorPasos)) % 26) + 65)
            }else if(cadenaUnicode[j] >= 97 && cadenaUnicode[j] <= 122){
                somaUnicode.push(((cadenaUnicode[j] - 97 + parseInt(valorPasos)) % 26) + 97)

            }else{
                somaUnicode.push(parseInt(cadenaUnicode[j]))
            }
            
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

        //Resta do Incremento
        var restaUni = []
        for(j=0 ; j < txtCodUni.length; j++){

            if(txtCodUni[j] === 32){
                restaUni.push(parseInt(txtCodUni[j]));

            }else if(txtCodUni[j] >= 65 && txtCodUni[j] <= 90){
                restaUni.push((((txtCodUni[j] - 65) - parseInt(valorPasos)) % 26) + 65)
            }else if(txtCodUni[j] >= 97 && txtCodUni[j] <= 122){
                restaUni.push((((txtCodUni[j] - 122) - parseInt(valorPasos)) % 26) + 122)
            }else{
                restaUni.push(parseInt(txtCodUni[j]))
            }
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



