import React from 'react'
import './App.css'
import Interface from './Inteface/Interface'
import Game from './Game/Game'


function App (): JSX.Element {
  return (
    <div className="App">
      <Interface></Interface>
      <Game></Game>
    </div>
  )
}

export default App
