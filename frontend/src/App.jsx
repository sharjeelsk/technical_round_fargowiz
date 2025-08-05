import { useState } from 'react'

function App() {

  const [name, setName] = useState('')

  const fetchSearchResults = (value)=>{
    setTimeout(() => {
      setName(value)
    }, 300);
  }

  return (
    <>
      <h1>Debouncing Implementation</h1>

      <input placeholder='name' onChange={(e)=>fetchSearchResults(e.target.value)} />

      <p>Your debounced name is: {name}</p>
      <i>name will be shown once you have completed 300ms</i>



      
    </>
  )
}

export default App
