function delayedFieldUpdate(fieldId, newValue, delay = 400) {
    setTimeout(() => {
        const field = document.getElementById(fieldId);
        if (!field) return;

        field.value = newValue;
        field.style.color = newValue === "green" ? "green" : "black";
    }, delay);
}
