import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import {App} from "@/App"
import "yozora/styles"
import "@/aoi.css"

createRoot(document.getElementById("aoi")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
