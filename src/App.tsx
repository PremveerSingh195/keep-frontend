import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface joke {
  id: number,
  joke : string,
  description : string
}

function App() {

  const [jokes, setJokes] = useState<joke[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/jokes')
      .then((response) => {
        setJokes(response.data)
      }).catch((error)=> {
        console.log(error);
        
      })
  }, [])


  return (
    <div >
      <h1 className='text-xl text-red-600'>hello world !</h1>
      <div className=''>
        {jokes.map((joke)=> (
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
            <p>{joke.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App