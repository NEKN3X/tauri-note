import { invoke } from "@tauri-apps/api"
import { Editor } from "./modules/editor/editor"

export function App() {
  invoke("greet", { name: "World" }).then(response => console.log(response))
  return (
    <>
      <Editor />
    </>
  )
}
