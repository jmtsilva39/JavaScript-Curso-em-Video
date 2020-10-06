




function contar(){
var inicio = document.querySelector(".inicio")
var fim = document.querySelector('div#fim')
var passo = document.querySelector('div#passo')

document.write(inicio.innerHTML)

    while(inicio <= fim){
        document.write(inicio +' - ' )
        inicio += passo
    }

}


