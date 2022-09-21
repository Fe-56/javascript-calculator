function calculate(input){
    const operands = [];
    const operators = [];
    var currentOperand = "";

    for (let i = 0; i < input.length; i++){
        let character = input.charAt(i);
        console.log("character: " + character);
        console.log("currentOperand: " + currentOperand);

        if (
            character === "+" ||
            character === "x" ||
            character === "/"
        ){
            if (currentOperand != ""){
                operands.push(Number(currentOperand));
                operators.push(character);
                currentOperand = ""; //reset
            }
        }

        else if (character === "-"){
            if (currentOperand != ""){
                operands.push(Number(currentOperand));
            }

            operators.push("+");
            currentOperand = "-";
        }

        else { // numbers and decimal places
            currentOperand += character;
        }
    }

    if (currentOperand != ""){
        operands.push(Number(currentOperand));
    }

    console.log("operands: " + JSON.stringify(operands));
    console.log("operators: " + JSON.stringify(operators));
    return "69";
}

export default calculate;