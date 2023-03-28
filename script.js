function calculate(operation) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    let result;
    
    // verify input
    if (input1 === "" || input2 === "") {
        alert("Please enter both numbers.");
        return;
    }

    // cast type to number
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // determine which operation to perform
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
            // if division by 0
            if ( num2 == 0 ) {
                // warn user
                alert("Cannot divide by 0");
                // default value for printing
                result = 0;
                break;
            }
            result = num1 / num2;
            break;
    }

    // display output
    document.getElementById("result").textContent = result;
}