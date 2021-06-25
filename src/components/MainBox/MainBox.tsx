import React from 'react';

class MainBox extends React.Component {
    
    render() {
        return (
            <div className="mainBox">
                {this.props.children}
            </div>
        )
    }
}

export default MainBox;