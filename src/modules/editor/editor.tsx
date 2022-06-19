import TextareaAutosize from "react-textarea-autosize"
import { styled } from "@stitches/react"

export const Editor = () => {
  return (
    <div>
      <TextArea autoFocus></TextArea>
    </div>
  )
}

const TextArea = styled(TextareaAutosize, {
  width: "100%",
  resize: "none",
  backgroundColor: "yellow",
})
