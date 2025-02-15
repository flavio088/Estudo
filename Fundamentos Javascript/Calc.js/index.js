const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const calculate = require("./calculate")

import { handleInput } from "./modules/handleInput"
import { handleButtons } from "./modules/handleButtons"
import { handleTheme } from "./modules/handleTheme"

handleInput(input, calculate)
handleButtons(input, calculate)
handleTheme(main, root)