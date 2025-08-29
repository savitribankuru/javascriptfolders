let resultDiv = document.createElement("div");
resultDiv.id = "result";
resultDiv.style.marginTop = "20px";
resultDiv.style.textAlign = "center";
resultDiv.style.fontSize = "20px";
document.body.appendChild(resultDiv);
document.getElementById("bmi").onclick = function () {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let name = document.getElementById("name").value
    if (weight === "" || height === "") {;
        resultDiv.textContent = "⚠️ Please enter both weight and height!";
        resultDiv.style.color = "red";
        return;
    }

    let h = height / 100;
    let bmi = (weight / (h * h)).toFixed(2);
    if (bmi < 18.5) {
        condition = "Underweight (Weak)";
    } 
    else if (bmi >= 18.5 && bmi < 25) {
        condition = "Normal";
    } 
    else if (bmi >= 25 && bmi < 30) {
        condition = "Overweight";
    } 
    else {
        condition = "Obese (Fat)";
    }

    resultDiv.textContent = `${name} your BMI is ${bmi} → Condition: ${condition}`;
    resultDiv.style.color = "green";
};

document.getElementById("res").onclick = function () {
    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    resultDiv.textContent = ""; 
};
