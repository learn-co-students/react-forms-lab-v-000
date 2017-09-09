import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      validPoem: false
    };
  }

  handleChange= (e) => {
    this.setState({
       value: e.target.value
    })
  }

  validPoem = () => {
    let poem = this.state.value.split('\n')
    console.log(poem)
    if (poem.length === 3) {
       if (poem[0].trim().split(' ').length === 5 &&
      poem[1].trim().split(' ').length === 3 &&
       poem[2].trim().split(' ').length === 5){
         return true
       } 

    }
    return false
  }

  render() {
    const valid = this.validPoem()
    console.log(valid)
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60"
          value={this.state.value} 
          onChange={this.handleChange}
        />
        { valid ? null : <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;