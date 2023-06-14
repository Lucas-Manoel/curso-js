function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = window.document.getElementById('txtano')
 var res = document.getElementById('res')
 if (fano.value.length == 0 || Number(fano.value) > ano){
 window.alert('[ERRO] verifique os dados e tente novamente')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero =''
    var img =document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (fsex [0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute()
        }
    }
}

}