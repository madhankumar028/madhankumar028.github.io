import React from "react"
import { Router } from "@reach/router"
import { MemoryGame } from "./games/memory/memory_game";

const App = () => {
  return (
		<Router basepath="/app">
			<MemoryGame path="/memory" />
		</Router>
  )
}
export default App