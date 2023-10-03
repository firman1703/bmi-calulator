function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = weight / ((height / 100) ** 2); // Convert height to meters

    var bmiResultElement = document.getElementById("bmiResult");
    var bmiCategoryElement = document.getElementById("bmiCategory");

    bmiResultElement.textContent = bmi.toFixed(2);

    if (bmi < 18.5) {
        bmiCategoryElement.textContent = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategoryElement.textContent = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategoryElement.textContent = "Overweight";
    } else {
        bmiCategoryElement.textContent = "Obesity";
    }
}
