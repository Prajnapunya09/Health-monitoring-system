function calculate() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let heartRate = parseFloat(document.getElementById("heartRate").value);

    if (!weight || !height || !heartRate) {
        alert("Please fill all fields.");
        return;
    }

    let heightM = height / 100;
    let bmi = weight / (heightM * heightM);

    document.getElementById("bmiResult").innerText = "BMI: " + bmi.toFixed(2);

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    document.getElementById("bmiStatus").innerText = "Status: " + status;

    let hrStatus = "";
    if (heartRate < 60) hrStatus = "Low Heart Rate";
    else if (heartRate <= 100) hrStatus = "Normal Heart Rate";
    else hrStatus = "High Heart Rate";

    document.getElementById("heartRateStatus").innerText = "Heart Rate: " + hrStatus;
}

