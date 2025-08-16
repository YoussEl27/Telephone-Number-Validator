const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const inputNumber = document.getElementById('phone_number');
const output = document.getElementById('output');


function telephoneCheck(str) {
    const cleaned = str.replace(/\s/g, '');
    const regex = /^(?:(00|\+)212|0)([67]\d{8})$/;
    return regex.test(cleaned);
}

checkButton.addEventListener('click', () => {
    if (inputNumber.value.trim() === '') {
        alert("Please enter a valid number");
        return;
    }
    const isValid = telephoneCheck(inputNumber.value);
    output.style.display = 'flex';
    output.innerHTML = isValid ? "✓ valid phone number" : "✗ Invalid phone number";
});

clearButton.addEventListener('click', () => {
    inputNumber.value = '';
    output.style.display = 'none';
})