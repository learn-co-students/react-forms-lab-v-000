import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  updateText = (event) => {
    this.setState({
      text: event.target.value
    })
   
  }

  poemValid = () => {
    console.log(this.state.text.split(/\n/)[0].split(/\s+\S/).length)
    return ( 
      this.state.text.split(/\n/).length === 3 &&
      this.state.text.split(/\n/)[0].split(/\s+\S/).length === 5 &&
      this.state.text.split(/\n/)[1].split(/\s+\S/).length === 3 &&
      this.state.text.split(/\n/)[2].split(/\s+\S/).length === 5
    )
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.text}
          onChange = {this.updateText}
        />
        {!this.poemValid() &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>  
        }
      </div>
    );
  }
}

export default PoemWriter;



