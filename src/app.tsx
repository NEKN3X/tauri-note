import { Logo } from "./logo"
import { invoke } from "@tauri-apps/api"

export function App() {
  invoke("greet", { name: "World" }).then(response => console.log(response))
  return (
    <>
      <Logo />
      <p>Hello Tauri!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
