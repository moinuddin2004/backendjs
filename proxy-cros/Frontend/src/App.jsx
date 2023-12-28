import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes, setJokes] = useState([])
//localhost:3000
http: useEffect(() => {
  (async () => {
    try {
      let response = await axios.get("/api/jokes");
      console.log(response.data);
      setJokes(response.data);
    } catch (error) {
      console.log(error);
    }
  })();
}, []);


  return (
    <>
      <h1>hello world</h1>
      <h5>JOKES:{jokes.length}</h5>
      {
        jokes.map((joke, index) => {
          return(
          <div  key={joke.id}>
          <h2>{joke.author}</h2>
            <p>{joke.joke}</p>
            </div>
          )
      })
      }
    </>
  )
}

export default App
