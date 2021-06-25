import React, {useState, useEffect} from 'react';
import './GenerateJokeButton.css';

const API = 'https://api.icndb.com/jokes/random?escape=javascript';

function GenerateJokeButton() {

    const [joke, setJoke] = useState('');
        
    const generateJoke = async () => {
        await fetch(API)
            .then(res => res.json())
            .then(data => setJoke(data.value.joke));
    }
        
    useEffect(() => {
        generateJoke();
    }, [])

    return (
        <div>
            <button className="btn" onClick={generateJoke}>Draw a random Chuck Norris Joke</button>
            <p className="jokeText">"{joke}"</p>
        </div>
    );
}

export default GenerateJokeButton;