function calculate(input){ // immediate execution logic
    const operands = [];
    const operators = [];
    var currentOperand = "";
    var answer = 0;

    for (let i = 0; i < input.length; i++){
        let character = input.charAt(i);

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

    var operand;
    var operator;

    for (let i = 0; i < operands.length; i++){
        operand = operands[i];

        if (i === 0){
            answer += operand;
        }

        else{
            operator = operators[i - 1];

            switch (operator){
                case "+":
                    answer += operand;
                    break;

                case "-":
                    answer -= operand;
                    break;

                case "x":
                    answer *= operand;
                    break;

                case "/":
                    answer /= operand;
                    break;
            }
        }
    }

    return answer;
}

export default calculate;