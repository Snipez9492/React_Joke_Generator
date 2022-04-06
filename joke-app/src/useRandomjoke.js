import React, {useState, useEffect} from 'react'
const axios = require('axios');


function useRandomjoke(fName, lNmae) {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        axios.get(`https://api.icndb.com/jokes/random?firstName=${fName}&lastName=${lNmae}`).then(function(response){
        setJoke(response.data.value.joke);
        }).catch(function (error) {
        
          console.log(error);
        })
        .then(function () {
      });
      }, [fName, lNmae]);

      return joke;
}

export default useRandomjoke
