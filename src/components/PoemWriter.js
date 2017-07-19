import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {poem :"", validPoem: false};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({poem: e.target.value});
    var poem = e.target.value.split("\n").map((line) => line.trim());
    
    if (poem.length === 3 && poem[0].split(" ").length === 5 && poem[1].split(" ").length === 3 && poem[2].split(" ").length === 5) {
      this.setState({validPoem: true});
    }

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem} onChange={this.handleInputChange}
        />
        {!this.state.validPoem &&
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
