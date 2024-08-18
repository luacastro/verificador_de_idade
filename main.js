function verificar() {
    var day = new Date()
    var year = day.getFullYear()
    var fyear = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fyear.value.length == 0 || Number(fyear.value) > year){
        window.alert("Verifique os dados e tente novamente")
    } else{
        var fgen = document.getElementsByName('gender')
        var idade = year - Number(fyear.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if(fgen[0].checked){
            gen = 'homem'
            if(idade >= 0 && idade < 13){
                // criança
                img.setAttribute('src', 'kidBoy.jpg')
            } else if(idade >= 13 && idade < 25){
                // jovem
                img.setAttribute('src', 'youngMan.jpg')
            } else if(idade >= 25 && idade <=60){
                //adulto
                img.setAttribute('src', 'adultMan.jpg')
            } else{
                //veio
                img.setAttribute('src', 'oldMan.png')
            }
        }else{
            gen = 'mulher'
            if(idade >= 0 && idade < 13){
                // criança
                img.setAttribute('src', 'kidGirl.jpg')
            } else if(idade >= 13 && idade < 25){
                // jovem
                img.setAttribute('src', 'youngWoman.jpg')
            } else if(idade >= 25 && idade <=60){
                //adulto
                img.setAttribute('src', 'adultWoman.jpg')
            } else{
                //veio
                img.setAttribute('src', 'oldWoman.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
} 