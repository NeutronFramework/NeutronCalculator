import "./ExpressionField.css"

type Props = {
    expressionInput: string
    expressionResult: string
}


export default function ExpressionField(props: Props) {
  return (
    <div className="expression-field">
        <text className="expression-input">{props.expressionInput}</text>
        <text className="expression-result">{props.expressionResult}</text>
    </div>
  )
}