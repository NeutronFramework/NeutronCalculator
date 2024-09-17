import { ReactNode } from "react";
import "./CalculatorGrid.css"

type Props = {
    children: ReactNode;
}

export default function CalculatorGrid(props: Props) {
  return (
    <div className="calculator-grid">
        {props.children}
    </div>
  )
}
