function calculateAge() {
  const today = new Date();
  const birthdateInput = document.getElementById("birthdate").value;
  const birthdateParts = birthdateInput.split("-");   
  const birthDay = parseInt(birthdateParts[0], 10);
  const birthMonth = parseInt(birthdateParts[1], 10) - 1; 
  const birthYear = parseInt(birthdateParts[2], 10);
 
  const birthDate = new Date(birthYear, birthMonth, birthDay);

  const isValidDate = (date) => {
      return (
          Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)  
      );
  };

  if (!isValidDate(birthDate)) {
      alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
      return;
  }

  let ageInMilliseconds = today - birthDate;

  // Calculate age
  let ageInYears = today.getFullYear() - birthDate.getFullYear();
  let ageInMonths = today.getMonth() - birthDate.getMonth();
  let ageInDays = today.getDate() - birthDate.getDate();

  if (ageInDays < 0) {
      ageInMonths--;
      ageInDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageInMonths < 0) {
      ageInYears--;
      ageInMonths += 12;
  }

  let totalMonths = ageInYears * 12;
  let totalDays = Math.floor(ageInYears * 365.25); // Account for leap years
  let totalWeeks = Math.floor(totalDays / 7);
  let totalHours = totalDays * 24;
  let totalMinutes = totalHours * 60;
  let totalSeconds = totalMinutes*60;

  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");

  result.innerHTML = `
      <div class="result-item">
          <h3>Age:</h3>
          <p>${ageInYears} Years ${ageInMonths} Months ${ageInDays} Days</p>
      </div>  
      <div class="result-item">
          <h3>Months Passed:</h3>
          <p>${totalMonths}</p>
      </div> 
      <div class="result-item">
          <h3>Weeks Passed:</h3>
          <p>${totalWeeks}</p>
      </div> 
      <div class="result-item">
          <h3>Days Passed:</h3>
          <p>${totalDays}</p>
      </div> 
      <div class="result-item">
          <h3>Hours Passed:</h3>
          <p>${totalHours}</p>
      </div>  
      <div class="result-item">
          <h3>Minutes Passed:</h3>
          <p>${totalMinutes}</p>
      </div> 
      <div class="result-item">
          <h3>Seconds Passed:</h3>
          <p>${totalSeconds}</p>
      </div> 
  `;

  resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
