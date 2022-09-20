import React from 'react';
import calculate from './logic';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tempDisplay: "",
            display: "0",
            displayIsAnswer: false
        }
        this.inputButtonHandler = this.inputButtonHandler.bind(this);
        this.clearButtonHandler = this.clearButtonHandler.bind(this);
        this.equalsButtonHandler = this.equalsButtonHandler.bind(this);
    }

    inputButtonHandler(event){
        let character;
        let continueFromPrevious = false;
        let newTempDisplay;
        let newDisplay;
        let newDisplayIsAnswer = false;
        let isNumber = true;

        switch (event.target.id){
            case "decimal":
                character = ".";
                break;

            case "zero":
                character = "0";
                break;

            case "one":
                character = "1";
                break;

            case "two":
                character = "2";
                break;

            case "three":
                character = "3";
                break;

            case "four":
                character = "4";
                break;

            case "five":
                character = "5";
                break;

            case "six":
                character = "6";
                break;

            case "seven":
                character = "7";
                break;

            case "eight":
                character = "8";
                break;

            case "nine":
                character = "9";
                break;

            case "add":
                character = "+";
                continueFromPrevious = true;
                isNumber = false;
                break;

            case "subtract":
                character = "-";
                continueFromPrevious = true;
                isNumber = false;
                break;

            case "multiply":
                character = "x";
                continueFromPrevious = true;
                isNumber = false;
                break;

            case "divide":
                character = "/";
                continueFromPrevious = true;
                isNumber = false;
                break;

            default:
                character = "";
                break;
        }

        this.setState((state, props) => {
            if (isNumber){
                if (character === "0"){
                    if (state.display === "0"){
                        newTempDisplay = "0";
                        newDisplay = state.display;
                    }

                    else if (
                        state.display === "+" ||
                        state.display === "-" ||
                        state.display === "x" ||
                        state.display === "/" 
                    ){  
                        newTempDisplay = state.tempDisplay.concat("0");
                        newDisplay = "0";
                    }

                    else if (
                        state.display === "+0" ||
                        state.display === "-0" ||
                        state.display === "x0" ||
                        state.display === "/0"
                        ){
                            newTempDisplay = state.tempDisplay;
                            newDisplay = state.display;
                    }

                    else{
                        newTempDisplay = state.tempDisplay.concat(character);
                        newDisplay = state.display.concat(character);
                    }
                }

                else{

                }
            }

            else{
                if (
                    state.display === "0" || 
                    state.display === "+" ||
                    state.display === "-" ||
                    state.display === "x" ||
                    state.display === "/"
                    ){
                        newTempDisplay = character;
                        newDisplay = character;
                }
            }

            return {
                tempDisplay: newTempDisplay,
                display: newDisplay,
                displayIsAnswer: newDisplayIsAnswer
            }
        });
    }

    clearButtonHandler(){
        this.setState((state, props) => {
            return {
                tempDisplay: "",
                display: "0"
            }
        });
    }

    equalsButtonHandler(){
        this.setState((state, props) => {
            return {
                tempDisplay: state.tempDisplay.concat("="),
                display: calculate(this.state.display),
                displayIsAnswer: true
            };
        });
    }

    render(){
        return(
            <div id="wrapper" class="row d-flex justify-content-center">
                <div>
                    <div id="temp-display" class="text-end col-sm-8">{this.state.tempDisplay}</div>
                    <div id="display" class="text-end col-sm-8">{this.state.display}</div>
                    <div class="row d-flex justify-content-center">
                        <button id="clear" class="button col-sm-2 clear-button" onClick={this.clearButtonHandler}>AC</button>
                        <button id="equals" class="button col-sm-2 equal-button" onClick={this.equalsButtonHandler}>=</button>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <button id="seven" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>7</button>
                        <button id="eight" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>8</button>
                        <button id="nine" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>9</button>
                        <button id="add" class="button col-sm-1 operation-button" onClick={this.inputButtonHandler}>+</button>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <button id="four" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>4</button>
                        <button id="five" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>5</button>
                        <button id="six" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>6</button>
                        <button id="subtract" class="button col-sm-1 operation-button" onClick={this.inputButtonHandler}>-</button>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <button id="one" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>1</button>
                        <button id="two" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>2</button>
                        <button id="three" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>3</button>
                        <button id="multiply" class="button col-sm-1 operation-button" onClick={this.inputButtonHandler}>x</button>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <button id="zero" class="button col-sm-2 digit-button" onClick={this.inputButtonHandler}>0</button>
                        <button id="decimal" class="button col-sm-1 digit-button" onClick={this.inputButtonHandler}>.</button>
                        <button id="divide" class="button col-sm-1 operation-button" onClick={this.inputButtonHandler}>/</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;