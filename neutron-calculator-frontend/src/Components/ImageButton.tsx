import "./ImageButton.css"

type Props = {
    onClick: () => void
    imagePath: string
    className?: string
    darker?: boolean
    imgWidth?: number
    imgHeight?: number
}

export default function ImageButton({imagePath, onClick, imgWidth = 16, imgHeight = 16, className = "", darker = false}: Props) {
  return (
    <div className={darker ? `darker-image-button ${className}` : `image-button ${className}`} onClick={() => onClick()}>
        <img src={imagePath} width={imgWidth} height={imgHeight} className="image-button-image" />
    </div>
  )
}