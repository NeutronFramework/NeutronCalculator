import './App.css'

import TextButton from "./Components/TextButton"
import CalculatorGrid from "./Containers/CalculatorGrid"
import NumberField from "./Containers/ExpressionField"
import { useState } from "react";
import ImageButton from "./Components/ImageButton";

import backspaceArrowPath from "./assets/icons/backspace-arrow.png";
import multiplyPath from "./assets/icons/multiply.png";
import minusPath from "./assets/icons/minus.png";
import dividePath from "./assets/icons/divide.png";
import addPath from "./assets/icons/add.png";
import equalPath from "./assets/icons/equal.png";


declare global {
    let evaluateExpression: (expression: string) => Promise<string>; 
}

export default function App(): JSX.Element {
    const [inputExpression, setInputExpression] = useState(" ");
    const [resultExpression, setResultExpression] = useState(" ");

    async function getAnswer(expression: string) {
        let result: string = await evaluateExpression(expression);

        console.log(`Result of expression ${result}`)

        setInputExpression("");
        setResultExpression(result);
    }

    function addExpression(expression: string) {
        if (resultExpression == "Error") {
            setInputExpression(inputExpression + expression);
            return;
        }

        if (resultExpression != "" && inputExpression == "") {
            setInputExpression(resultExpression + expression);
            return;
        }

        setInputExpression(inputExpression + expression);
    }

    function clearExpression() {
        setInputExpression("");
        setResultExpression("");
    }

    return (
        <div className="app">
            <NumberField expressionInput={inputExpression} expressionResult={resultExpression} />

            <CalculatorGrid>
                <TextButton text="(" darker={true} onClick={() => setInputExpression(inputExpression + "(")}/>
                <TextButton text=")" darker={true} onClick={() => setInputExpression(inputExpression + ")")}/>
                <ImageButton imagePath={dividePath} onClick={() => addExpression("÷")} darker={true} imgWidth={17} imgHeight={17}/>
                <ImageButton imagePath={backspaceArrowPath} onClick={() => setInputExpression(inputExpression.slice(0, inputExpression.length - 1))} darker={true}/>

                <TextButton text="7" onClick={() => setInputExpression(inputExpression + "7")}/>
                <TextButton text="8" onClick={() => setInputExpression(inputExpression + "8")}/>
                <TextButton text="9" onClick={() => setInputExpression(inputExpression + "9")}/>
                <ImageButton imagePath={multiplyPath} onClick={() => addExpression("x")} darker={true} imgWidth={12} imgHeight={12}/>

                <TextButton text="4" onClick={() => setInputExpression(inputExpression + "4")}/>
                <TextButton text="5" onClick={() => setInputExpression(inputExpression + "5")}/>
                <TextButton text="6" onClick={() => setInputExpression(inputExpression + "6")}/>
                <ImageButton imagePath={minusPath} onClick={() => addExpression("-")} darker={true} imgWidth={16} imgHeight={16}/>

                <TextButton text="1" onClick={() => setInputExpression(inputExpression + "1")}/>
                <TextButton text="2" onClick={() => setInputExpression(inputExpression + "2")}/>
                <TextButton text="3" onClick={() => setInputExpression(inputExpression + "3")}/>
                <ImageButton imagePath={addPath} onClick={() => addExpression("+")} darker={true} imgWidth={18} imgHeight={18}/>

                <TextButton text="CE" onClick={() => clearExpression()}/>
                <TextButton text="0" onClick={() => setInputExpression(inputExpression + "0")}/>
                <TextButton text="." onClick={() => setInputExpression(inputExpression + ".")}/>

                <ImageButton imagePath={equalPath} onClick={() => getAnswer(inputExpression)} darker={true} imgWidth={18} imgHeight={18}/>
            </CalculatorGrid>
        </div>
    )
}