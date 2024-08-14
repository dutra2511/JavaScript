function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'foto-manha.jpg'
        document.body.style.background = 'rgb(177, 168, 85)'
    }else if (hora >= 12 && hora < 18){
        img.src = 'foto-tarde.jpg'
        document.body.style.background = 'rgb(250, 173, 56)'
    }else{
        img.src = 'foto-noite.jpg'
        document.body.style.background = 'rgb(36, 82, 112)'
    }
}