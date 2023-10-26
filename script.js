function dividir(){
    let txtn1 = document.getElementById('txtn1').value
    let txtn2 = document.getElementById('txtn2').value
    let n1 = Number(txtn1)
    let n2 = Number(txtn2)
    let resp = document.getElementById('resposta')
    let calc = (n1/n2)
    resp.innerHTML=calc
}

function multiplicar(){
    let txtn1 = document.getElementById('txtn1').value
    let txtn2 = document.getElementById('txtn2').value
    let n1 = Number(txtn1)
    let n2 = Number(txtn2)
    let resp = document.getElementById('resposta')
    let calc = (n1*n2)
    resp.innerHTML=calc
}

function somar(){
    let txtn1 = document.getElementById('txtn1').value
    let txtn2 = document.getElementById('txtn2').value
    let n1 = Number(txtn1)
    let n2 = Number(txtn2)
    let resp = document.getElementById('resposta')
    let calc = (n1+n2)
    resp.innerHTML=calc
}

function subtrair(){
    let txtn1 = document.getElementById('txtn1').value
    let txtn2 = document.getElementById('txtn2').value
    let n1 = Number(txtn1)
    let n2 = Number(txtn2)
    let resp = document.getElementById('resposta')
    let calc = (n1-n2)
    resp.innerHTML=calc
}
