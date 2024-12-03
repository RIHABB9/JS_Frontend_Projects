document.getElementById("bmiForm").addEventListener('submit',function(e){

    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && heightFeet && heightInches && weight){

        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;  // in meters
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById("result");

        let category = '';

        if(bmi < 18.5){
            category = 'Under Weight';
        }else if (bmi >= 18.5 && bmi < 24.9){
            category = 'Normal Weight '
        }else if (bmi >= 25 && bmi < 29.9){
            category = 'Over Weight'    
        }else{
            category = 'Obese'
        }

        let resultMessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category:' + category;

        resultElement.innerHTML = resultMessage;


    }



});