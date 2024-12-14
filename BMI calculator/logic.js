function calculateBMI(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height ** 2);

    // Update the output
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${getBMICategory(bmi)})`;
}

// Function to categorize BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
