import React, { useState, useEffect } from 'react';
import './App.css';
import photo from './images/cn.jpg';
import Select from 'react-select';

function App() {
  const API = 'https://api.icndb.com/jokes/random?escape=javascript'; 
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
  }

  useEffect(() => {
    fetchJoke();
  }, [])

  const options = [
    { value: 'default', label: 'Categories' },
    { value: 'explicit', label: 'Explicit' },
    { value: 'nerdy', label: 'Nerdy' }
  ]

  return (
    <div className="App">
      <div className="mainBox">
        <img src={photo} className="photo" alt="chuck norris"/>
        <p className="jokeText">"{joke}"</p>
        <div className="selectBox">
          <Select options={options} defaultValue={options[0]}/>
        </div>
        <input type="text" className="imperBox" placeholder="Impersonate Chuck Norris"></input>
        <button className="btn" onClick={fetchJoke}>Draw a random Chuck Norris Joke</button>
      </div>
    </div>
  );

}

export default App;