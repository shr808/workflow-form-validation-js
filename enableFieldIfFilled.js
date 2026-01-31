function enableFieldIfFilled(targetId, fieldId1, fieldId2) {
    const field1 = document.getElementById(fieldId1);
    const field2 = document.getElementById(fieldId2);
    const target = document.getElementById(targetId);

    if (!field1 || !field2 || !target) return;

    target.disabled = field1.value === "" || field2.value === "";
}
