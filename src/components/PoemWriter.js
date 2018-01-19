import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      valid: false,
      value: '',
    };
  }

  validPoem = () => {
    const poem = this.state.value.split('\n');
    const poemFormatCorrect = (
      poem[0].trim().split(" ").length === 5 &&
      poem[1].trim().split(" ").length === 3 &&
      poem[2].trim().split(" ").length === 5
    )

    return poem.length === 3 && poemFormatCorrect;

  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });

    if ( this.validPoem() ) {
      this.setState({ valid: true })
    }
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}  />

        { this.state.valid ? <div style={{color: 'green'}}>Correct Format!</div> :
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }

      </div>
    );
  }
}

export default PoemWriter;
