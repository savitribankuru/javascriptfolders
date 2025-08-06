function incrementfun(){
    let currvalue=document.getElementById("counter").textContent
    currvalue=Number(currvalue)
    let colorchange=document.getElementById("counter").textContent=currvalue+1
    colorchange=Number(colorchange)
    if (colorchange>0){
        document.getElementById("counter").style.color="blue"

    }
    else if(colorchange<0){
        document.getElementById("counter").style.color="orange"
    }
    else{
        document.getElementById("counter").style.color="green"
    }
document.getElementById("increment").style.color="green"
}
function decrementfun(){
    let currvalue=document.getElementById("counter").textContent
    currvalue=Number(currvalue)
    let colorchange=document.getElementById("counter").textContent=currvalue-1
    colorchange=Number(colorchange)
    if (colorchange>0){
        document.getElementById("counter").style.color="blue"

    }
    else if(colorchange<0){
        document.getElementById("counter").style.color="orange"
    }
    else{
        document.getElementById("counter").style.color="green"
    }
document.getElementById("decrement").style.color="red"

}
function resetfun(){
    // let currvalue=document.getElementById("counter").textContent
    // currvalue=Number(currvalue)
    document.getElementById("counter").textContent=0
    document.getElementById("counter").style.color="black"
    document.getElementById("reset").style.color="gold"
}