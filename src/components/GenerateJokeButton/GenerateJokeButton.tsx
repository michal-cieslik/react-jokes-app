import React, { useState, useEffect } from 'react';
import './GenerateJokeButton.css';

function FetchJoke() {

    const [joke, setJoke] = useState('');
        
    const generateJoke = async () => {
        await fetch('https://api.icndb.com/jokes/random?escape=javascript')
            .then(res => res.json())
            .then(data => setJoke(data.value.joke));
    }
        
    useEffect(() => {
        generateJoke();
    }, [])

    return <p className="jokeText">"{joke}"</p>;
}



class GenerateJokeButton extends React.Component {
    
    render() {
        return <button className="btn" onClick={FetchJoke}>Draw a random Chuck Norris Joke</button>;
    };
    
}


export default GenerateJokeButton;