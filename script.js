const form = document.querySelector('form');
const notes = document.querySelector('.notes');
const notes1 = document.querySelector('.notes1');



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;

        if (bmi < 18.5) {
    notes.innerHTML = "Underweight";
    notes.style.fontWeight = 'bold';
    notes.style.color = 'orange';
    notes1.innerHTML = "You may need to gain weight";
    notes1.style.fontWeight = 'bold';
    notes1.style.color = 'orange';
} else if (bmi >= 18.5 && bmi < 24.9) {
    notes.innerHTML = "Normal weight";
    notes.style.fontWeight = 'bold';
    notes.style.color = 'green';
    notes1.innerHTML = "Great job! Keep maintaining your weight.";
    notes1.style.fontWeight = 'bold';
    notes1.style.color = 'green';
} else if (bmi >= 25 && bmi < 29.9) {
    notes.innerHTML = "Overweight";
    notes.style.fontWeight = 'bold';
    notes.style.color = 'orange';
    notes1.innerHTML = "Try to exercise more and watch your diet.";
    notes1.style.fontWeight = 'bold';
    notes1.style.color = 'orange';
} else if (bmi >= 30) {
    notes.innerHTML = "Obesity";
    notes.style.fontWeight = 'bold';
    notes.style.color = 'red';
    notes1.innerHTML = "You should consult a healthcare professional.";
    notes1.style.fontWeight = 'bold';
    notes1.style.color = 'red';
} else {
    notes.innerHTML = "";
    notes1.innerHTML = "";
    notes.style.fontWeight = 'normal';
    notes1.style.fontWeight = 'normal';
    notes.style.color = 'black';
    notes1.style.color = 'black';
}


    }
});
