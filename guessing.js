document.getElementById("heading").style.color="blue"
// document.getElementById("container").style.backgroundColor="green"
let randomnnumber=Math.random()*100
randomnnumber=Math.ceil(randomnnumber)
// console.log(randomnnumber)
function guessfun(){
    let currvalue=document.getElementById("user_input").value
    currvalue=Number(currvalue)
    if(currvalue==randomnnumber){
        document.getElementById("message").textContent="your guessing is correct"
    }
    else if (currvalue>randomnnumber){
        document.getElementById("message").textContent="your guessing number is too high"
    }
    else if (currvalue<randomnnumber){
        document.getElementById("message").textContent="your guessing number is too low"
    }

}