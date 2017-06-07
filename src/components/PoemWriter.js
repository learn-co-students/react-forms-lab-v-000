import React from 'react';

class PoemWriter extends React.Component {
    constructor() {
        super();

        this.state = { textValue: '', isValidPoem: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const text = e.target.value
        const isValid = this.poemValidator(text)
        this.setState({
            textValue: text,
            isValidPoem: isValid
        })

    }
    poemValidator(text){

        const textArray = text.split(/\r?\n/);
        const lineOne = textArray[0] || '';
        const lineTwo = textArray[1] || '';
        const lineThree = textArray[2] || '';
        return (lineOne.trim().split(/ /).length === 5 &&
                lineTwo.trim().split(/ /).length === 3 &&
                lineThree.trim().split(/ /).length === 5)
    }
    render() {
        let error = null
        if (!this.state.isValidPoem){
            
        error = <div 
                    id="poem-validation-error" 
                    style={{color: 'red'}} 
                    >
                    This poem is not written in the right structure!
                </div>
        }
        return (
            
            <div>
                <textarea 
                    rows="3" 
                    cols="60" 
                    value={this.state.textValue} 
                    onChange={this.handleChange}
                    />
                {error}
            </div>
        );
    }
}

export default PoemWriter;