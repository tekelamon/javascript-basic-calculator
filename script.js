function calculate(operation) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    let result;
    
    if (input1 === "" || input2 === "") {
        alert("Please enter both numbers.");
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // only adds, trying to add operator mutability
    // result = num1 + num2;

    // displays text, does not compute code however
    // result = `${num1} ${operation} ${num2}`;

    // deterministic function
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    document.getElementById("result").textContent = result;
}
