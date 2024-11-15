<!DOCTYPE html>
<html>
<head>
  <title>Cash Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <h1>Cash Calculator</h1>
        <div class="row">
          <img src="images/two_thousand_note.png"></img>
          <input type="number" id="et2000" class="cash-input" placeholder="Enter No. of Rs.2000 Notes">
          <span id="txt2000" class="cash-text">0</span>
        </div>
        <div class="row">
          <img src="images/five_hundred_note.png"></img>
          <input type="number" id="et500" class="cash-input" placeholder="Enter No. of Rs.500 Notes">
          <span id="txt500" class="cash-text">0</span>
        </div>
        <div class="row">
          <img src="images/two_hundred_note.png"></img>
          <input type="number" id="et200" class="cash-input" placeholder="Enter No. of Rs.200 Notes">
          <span id="txt200" class="cash-text">0</span>
        </div>

        <div class="row">
          <img src="images/one_hundred.png"></img>
          <input type="number" id="et100" class="cash-input" placeholder="Enter No. of Rs.100 Notes">
          <span id="txt100" class="cash-text">0</span>
        </div>

        <div class="row">
          <img src="images/fifty_note.png"></img>
          <input type="number" id="et50" class="cash-input" placeholder="Enter No. of Rs.50 Notes">
          <span id="txt50" class="cash-text">0</span>
        </div>

        <div class="row">
          <img src="images/twenty_note.png"></img>
          <input type="number" id="et20" class="cash-input" placeholder="Enter No. of Rs.20 Notes">
          <span id="txt20" class="cash-text">0</span>
        </div>

        <div class="row">
          <img src="images/ten_note.png"></img>
          <input type="number" id="et10" class="cash-input" placeholder="Enter No. of Rs.10 Notes">
          <span id="txt10" class="cash-text">0</span>
        </div>

        <div class="row">
          <img src="images/five_note.png"></img>
          <input type="number" id="et5" class="cash-input" placeholder="Enter No. of Rs.5 Notes">
          <span id="txt5" class="cash-text">0</span>
        </div>

        <div class="row">
          <img src="images/two_note.png"></img>
          <input type="number" id="et2" class="cash-input" placeholder="Enter No. of Rs.2 Notes">
          <span id="txt2" class="cash-text">0</span>
        </div>

        <div class="row">
          <img src="images/one_note.png"></img>
          <input type="number" id="et1" class="cash-input" placeholder="Enter No. of Rs.1 Notes">
          <span id="txt1" class="cash-text">0</span>
        </div>



        <div class="row">
          <button id="btnReset">Reset</button>
        </div>

        <div class="row result-part">
          <span id="txtFinalCash">Total Cash: 0</span>
          <span id="txtFinalCashInWords">Zero</span>
        </div>

    </div>
  
  <script src="script.js"></script>
</body>
</html>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to right,  #593bc4,#c9a31b);
  font-family: Arial, sans-serif;
  color: #333;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px 5px;
  background: linear-gradient(to right, #c9a31b, #593bc4);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.5);;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  color: #ffffff;
}


.row{
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

}

img {
  margin-right: 10px;
}

input[type="number"] {
  padding: 10px;
  font-size: 15px;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #ccc;
  flex: 1;
  transition: border-color 0.3s ease;
  background-color: #fff;
  color: #333;
  font-weight: 600;
  
}

input[type="number"]:focus {
  border-color: #ff7e5f;
  outline: none;
  box-shadow: 0 0 0 2px #ff7e5f;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"]::-moz-inner-spin-button,
input[type="number"]::-moz-outer-spin-button {
  -moz-appearance: none;
  margin: 0;
}

input[type="number"]::-ms-clear {
  display: none;
}

input[type="number"]::-webkit-contacts-auto-fill-button {
  visibility: hidden;
  display: none !important;
  pointer-events: none;
  position: absolute;
  right: 0;
}

.cash-text {
  font-weight: bold;
  margin-left: 10px;
  width: 40px; /* Adjust the width as needed */
  display: inline-block;
  text-align: center;
  color: white;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff7e5f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-end;
}

button:hover {
  background-color: #ff6c4a;
}

#txtFinalCash {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: #ffffff;
}

#txtFinalCashInWords {
  margin-top: 10px;
  font-style: italic;
  color: #d4d0d0;
}

.result-part{
  display: flex;
  flex-direction: column;
}





@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const et2000 = document.getElementById('et2000');
    const et500 = document.getElementById('et500');
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et20 = document.getElementById('et20');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et2= document.getElementById('et2');
    const et1 = document.getElementById('et1');
    // Get references to other input fields
  
    const txt2000 = document.getElementById('txt2000');
    const txt500 = document.getElementById('txt500');
    const txt200 = document.getElementById('txt200');
    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt20 = document.getElementById('txt20');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt2 = document.getElementById('txt2');
    const txt1 = document.getElementById('txt1');
    // Get references to other result elements
  
    const txtFinalCash = document.getElementById('txtFinalCash');
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');
  
    const cashInputs = [et2000, et500, et200, et100,et50,et20,et10,et5,et2,et1];
    const cashTexts = [txt2000, txt500, txt200, txt100,txt50,txt20,txt10,txt5,txt2,txt1];
  
    cashInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        cashCalculate(index);
      });
    });
  
    btnReset.addEventListener('click', clearData);
  
    function cashCalculate(index) {
      const denominations = [2000, 500, 200, 100,50,20,10,5,2,1];
      const rowValue = cashInputs[index].value * denominations[index];
      cashTexts[index].textContent = rowValue.toFixed(0);
      // Perform calculations for other denominations
      // Update respective result elements
  
      totalCash();
    }
  
    function totalCash() {
      let totalCashValue = 0;
      cashTexts.forEach((text) => {
        totalCashValue += parseInt(text.textContent);
      });
      txtFinalCash.textContent = 'Total Cash: ' + totalCashValue;

      txtFinalCashInWords.textContent = `Total Cash In Words: ${convertToWords(totalCashValue)}`;
    }
  
    function clearData() {
      cashInputs.forEach((input) => {
        input.value = 0;
      });
      cashTexts.forEach((text) => {
        text.textContent = '0';
      });
      totalCash();
    }
  
   function convertToWords(number) {
      const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
      const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
      if (number === 0) {
        return 'Zero';
      }
  
      let words = '';
  
      if (Math.floor(number / 10000000) > 0) {
        words += convertToWords(Math.floor(number / 10000000)) + ' Crore ';
        number %= 10000000;
      }
  
      if (Math.floor(number / 100000) > 0) {
        words += convertToWords(Math.floor(number / 100000)) + ' Lakh ';
        number %= 100000;
      }
  
      if (Math.floor(number / 1000) > 0) {
        words += convertToWords(Math.floor(number / 1000)) + ' Thousand ';
        number %= 1000;
      }
  
      if (Math.floor(number / 100) > 0) {
        words += convertToWords(Math.floor(number / 100)) + ' Hundred ';
        number %= 100;
      }
  
      if (number > 0) {
        if (number < 10) {
          words += units[number];
        } else if (number < 20) {
          words += teens[number - 10];
        } else {
          words += tens[Math.floor(number / 10)];
          if (number % 10 > 0) {
            words += ' ' + units[number % 10];
          }
        }
      }
  
      return words.trim();
    }

    cashInputs.forEach(input => {
        input.addEventListener('input', () => {
          const value = parseInt(input.value, 10);
          if (isNaN(value) || value < 0) {
            input.value = '';
          }
        });
      });
    
      cashTexts.forEach(text => {
        text.addEventListener('input', () => {
          const value = parseInt(text.textContent, 10);
          if (isNaN(value) || value < 0) {
            text.textContent = '0';
          }
        });
      });
  });