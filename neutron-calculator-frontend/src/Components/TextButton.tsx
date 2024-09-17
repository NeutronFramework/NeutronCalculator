import "./TextButton.css"

type Props = {
    text: string
    onClick: () => void
    className?: string
    darker?: boolean
}

export default function TextButton({text, onClick, className = "", darker = false}: Props) {
  return (
    <div className={darker ? `darker-text-button ${className}` : `text-button ${className}`} onClick={() => onClick()}>
        <text className="text-button-text">{text}</text>
    </div>
  )
}