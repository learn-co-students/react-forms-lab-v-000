import React from "react";

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poem: " ",
      poemValid: false
    };

    this.poemValidator = this.poemValidator.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  poemValidator = () => {
    let poem = this.state.poem
    let poemLength = poem.split(/\s+/)

    if (poemLength.length === 14) {
      return ""
    } else {
      return <div id="poem-validation-error">This poem is not written in the right structure!</div>
    }
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange} />
        {this.poemValidator()}
      </div>
    );
  }
}

export default PoemWriter;
