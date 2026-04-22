const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?/";
const allChars = upperChars + lowerChars + numbers + specialChars;

let userNum;
let cBox1 = document.getElementById("copyBox1")
let cBox2 = document.getElementById("copyBox2")
const errorMsg = document.getElementById("errorMsg");

document.getElementById("generatebutton").onclick = function passLength(){
    userNum = Number(document.getElementById("usernum").value)
    if (userNum < 6) {
        errorMsg.textContent = "Number must be at least 6";
        return;
    }else if (userNum>15){
        errorMsg.textContent = "Number must be less than 16";
        return;
    }else if(isNaN(userNum)){
        errorMsg.textContent = "Please enter a number value";
        return;
    }
    errorMsg.textContent = "";

    cBox1.textContent =  genArr(userNum)
    cBox2.textContent = genArr(userNum)
    
}

function genArr(length) {
    let password = "";
  
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);
  
    for (let i = 0; i < length; i++) {
      const index = randomValues[i] % allChars.length;
      password += allChars[index];
    }
  
    return password;
}





console.log(userNum)
