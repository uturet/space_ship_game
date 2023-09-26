import React from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './Inteface/Main'


function App (): JSX.Element {
  return (
    <div className="App">
      <Main></Main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World</code>
        </p>
      </header>
    </div>
  )
}

export default App
