import React from 'react';
import Select from 'react-select';
import './SelectCategories.css';

const options = [
    { value: 'default', label: 'Categories' },
    { value: 'explicit', label: 'Explicit' },
    { value: 'nerdy', label: 'Nerdy' }
]

class SelectCategories extends React.Component { 
    render() {
        return (
            <div className="selectBox">
                <Select options={options} defaultValue={options[0]}/>
            </div>
        )
    }    

}

export default SelectCategories;