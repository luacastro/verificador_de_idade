function verificar(){
    var day = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if(fyear.ariaValueMax.length == 0 || fyear.value > year){
        window.alert("Verifique os dados e tente novamente")
    }
} 