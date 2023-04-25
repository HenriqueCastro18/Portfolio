function insert(num) {
    var n1 = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = n1 + num;

}


function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    var resul = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resul.substring(0, resul.length -1);
}

function calcular() {
    var resul = document.getElementById('result').innerHTML;

    if(resul){
        document.getElementById('result').innerHTML = eval(resul);
    }
    
}