import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    }, () => console.log(this.state.value))
  }
  
  validatePoem = () => {
    let poem = this.state.value.split('\n').map(line => line.split(' ').filter(word => word !== ''));
    if(poem.some(line => line[0] === '') || poem.length !== 3 || poem[0].length !== 5 || poem[1].length !== 3 || poem[2].length !== 5) {
      return (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      )
    }  
}
  
  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60"
          value={this.state.value}
          onChange={this.handleChange} 
          />

          {this.validatePoem()}

      </div>
    );
  }
}

export default PoemWriter;
