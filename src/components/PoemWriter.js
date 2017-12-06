import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  validPoem = () => {
    let poem = this.state.value.split('\n')
    if(poem.length === 3) {
      let firstLineWordCount = poem[0].trim().split(" ").length
      let secondLineWordCount = poem[1].trim().split(" ").length
      let thirdLineWordCount = poem[2].trim().split(" ").length
      if(firstLineWordCount === 5 && secondLineWordCount === 3 && thirdLineWordCount === 5) {
        return true
      } 
    } else {
      return false
    }

    
  }

  render() {
    const valid = this.validPoem()
    
    return (
      <div>
        <textarea
          onChange={this.handleChange}

          value={this.state.value}
          rows="3"
          cols="60"
        />
        {valid ? null :
        <div
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
