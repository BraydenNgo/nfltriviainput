import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import React from "react";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <h1>Ultimate NFL Quiz!</h1>
      <p> How big of an NFL fan are you? Test your NFL knowledge here!</p>
      <p>Number of cards: 10</p>
      <Card/>
    </div>
    </>
  )
}

export default App
