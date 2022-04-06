import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const axios = require('axios');

function App() {

  const [joke, setJoke] = useState('');

  useEffect(() => {
    axios.get('https://api.icndb.com/jokes/random?firstName=Olawale&lastName=Orimogunje').then(function(response){
    //console.log(response);
    //setJoke(data.value.joke);
    setJoke(response.data.value.joke);
    }).catch(function (error) {
    
      console.log(error);
    })
    .then(function () {
  });
  }, [])
  
  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>
            <h2>{joke}</h2>
        <button>Generator Joke</button>
      </center>
    </div>
  );
}

export default App;
