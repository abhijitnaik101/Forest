import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Sections/Hero'
import Bonfire from './Sections/Bonfire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Bonfire/>
    </>
  )
}


export default App
