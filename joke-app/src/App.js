import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import useRandomjoke from './useRandomjoke';
const axios = require('axios');

function App() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('Olawale');
  const [lastName, setLastName] = useState('Orimogunje');

  const joke = useRandomjoke(firstName, lastName);

  const generateJoke = e => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };


  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>
            <h2>{joke}</h2>
            <form action="">
              <input placeholder='first name' ref={firstNameRef}/>
              <input placeholder='last name' ref={lastNameRef}/>
              <button onClick={generateJoke}>Generator Joke</button>
            </form>
      </center>
    </div>
  );
}

export default App;
