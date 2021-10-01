function mobileCheck(str) {
    let bracketCheck = /[(]\d{3}[)]/;
    let checkBeginning = /^([(]\d{3}[)])/;
    let otherCharsCheck = /^[-]|[^\s-\d)(]/;
    let space = /[\s-]/g;
    let countryCodeCheck = /^1/;
    let simple = str.replace(space, '');
    if (otherCharsCheck.test(str)) {
        return false;
    } else {
        if (simple.length === 13
            && countryCodeCheck.test(simple)
            && bracketCheck.test(simple)) {
            return true;
        } else if (simple.length === 12
            && checkBeginning.test(simple)) {
            return true;
        } else if (simple.length === 11
            && countryCodeCheck.test(simple)) {
            return true;
        } else if (simple.length === 10) {
            return true;
        }
    } return false;
}

function displayResults(input) {
    let answer = mobileCheck(input);
    if (answer) {
        resultsDiv.innerHTML = 'Valid phone number! 😃';}
    else {
        resultsDiv.innerHTML = 'Invalid phone number! 😕';}
}

// enter to submit
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        displayResults(e.target.value);
    }
});

// click to submit
phoneBtn.addEventListener('click', () => {
    displayResults(input.value);
});
