import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      errorDisplay: ""
    };
  }

  updateContent = (e) => {
    this.setState({
      content: e.target.value
    }, this.validatePoem)

  }

  validatePoem = () => {
    let poem = this.state.content
    if (poem.length > 5){
      this.state.errorDisplay = "none";
    } else {
      this.state.errorDisplay = "";
    }
    this.setState(this.state)
  };

  render() {
    return (
      <div>
        <textarea
          value = {this.state.content}
          rows="3"
          cols="60"
          onChange={this.updateContent}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red', display: this.state.errorDisplay}}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
