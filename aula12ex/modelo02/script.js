function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]- Verifique os dados e tente novamente.')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-menino.jpg')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-homem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'homem.jpg')
            }else{
                img.setAttribute('src', 'idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-menina.jpg')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-mulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'mulher.jpg')
            }else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}