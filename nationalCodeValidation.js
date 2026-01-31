function isValidNationalCode(code) {
    return /^\d{10}$/.test(code);
}

function validateNationalCodeInput(inputId, dependentFieldId) {
    const input = document.getElementById(inputId);
    const dependent = document.getElementById(dependentFieldId);

    if (!input || !dependent) return;

    if (!isValidNationalCode(input.value)) {
        input.value = "";
        dependent.disabled = true;
        alert("Invalid national code format");
    }
}
