const handleNum = (num) => {
    document.getElementById('t1').value += num

    return num
}


const cal=()=>{
    let x = document.getElementById('t1').value
    let y = eval(x);
    document.getElementById('t1').value = y
    return y

}


function clearsrc(){
    document.getElementById('t1').value = ''

}