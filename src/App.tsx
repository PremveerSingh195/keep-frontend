import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface joke {
  id: number,
  joke : string,
  description : string
}

function App() {

  return (
    <div >
      <h1>Hello world</h1>
    </div>
  )
}

export default App