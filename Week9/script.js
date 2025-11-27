function calculate() {
    var a = parseFloat(document.calcform.txta.value);
    var b = parseFloat(document.calcform.txtb.value);
    var operator = document.calcform.sto.value;
    var result;

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter both numbers!");
        return;
    }

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result = "Error (divide by 0)";
        } else {
            result = a / b;
        }
    } else if (operator === "%") {
        result = a % b;
    } else if (operator === "**") {
        result = a ** b;
    } else {
        result = "Invalid operator";
    }

    document.calcform.txtr.value = result;
}
