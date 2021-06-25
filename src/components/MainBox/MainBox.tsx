import React from 'react';
import GenerateJokeButton from '../GenerateJokeButton/GenerateJokeButton';
import NorrisPhoto from '../NorrisPhoto/NorrisPhoto';
import './MainBox.css';



class MainBox extends React.Component {
    
    render() {
        return (
            <div className="mainBox">
                <NorrisPhoto />
                <GenerateJokeButton />
            </div>
        )
    }
}

export default MainBox;