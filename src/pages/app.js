import React from "react"
import { Router } from "@reach/router"
import { MemoryGame } from "./games/memory";

const App = () => {
  return (
		<Router basepath="/app">
			<MemoryGame path="/memory" />
		</Router>
  )
}
export default App