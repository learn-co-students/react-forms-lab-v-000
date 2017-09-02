import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  validateLines(e) { 
    const lines = e.target.value.split('\n').length
    if (lines === 3) {
      return true
    }
    return false
  }

  handleInputChange = (e) => {
    this.setState({
      poem: e.target.value
    })
    if (this.validateLines(e) && this.validateWordCount(e)) {
     return this.setState({
        isValid: true
      })
    }
      this.setState({
        isValid: false
      })
  }

  validateWordCount(e) {
    const lineArray = e.target.value.split('\n')
    if (lineArray[0].trim().split(' ').length === 5 
        && lineArray[1].trim().split(' ').length === 3 
        && lineArray[2].trim().split(' ').length === 5) {
        return true
    }
    return false
  }

  render() {
    const errorMessage = <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          'This poem is not written in the right structure!'
        </div>;
    return (
      <div>
        <textarea 
          rows="3" 
          onChange={this.handleInputChange.bind(this)}
          cols="60" 
          value={this.state.poem}
        />
        {this.state.isValid ? null : errorMessage}
      </div>
    );
  }
}

export default PoemWriter;