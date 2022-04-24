function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                 // Criança
                 img.setAttribute('src', 'image/boy.png')
                 img.style.height = '200px'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'image/teen-boy.png')
                img.style.height = '200px'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'image/men.png')
                img.style.height = '200px'
            } else {
                // Idoso
                img.setAttribute('src', 'image/grandpa.png')
                img.style.height = '200px'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'image/girl.png')
                img.style.height = '200px'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'image/teen-girl.png')
                img.style.height = '200px'
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'image/woman.png')
                img.style.height = '200px'
            } else {
                // Idosa
                img.setAttribute('src', 'image/grandma.png')
                img.style.height = '200px'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}