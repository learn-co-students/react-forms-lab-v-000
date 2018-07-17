import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem_value: '', 
      hide_error: false
    };
  }

  handlePoemChange = event => {
    let hide_error = false
    const lines = event.target.value.split('\n')

    if (lines.length === 3) {
      const line1_words = lines[0].split(' ')
      const line2_words = lines[1].split(' ')
      const line3_words = lines[2].split(' ')

      let line1_count = 0
      for (let i = 0; i < line1_words.length; ++i) {
        if (line1_words[i].length > 0)
          line1_count++
      }
      let line2_count = 0
      for (let i = 0; i < line2_words.length; ++i) {
        if (line2_words[i].length > 0)
          line2_count++
      }
      let line3_count = 0
      for (let i = 0; i < line3_words.length; ++i) {
        if (line3_words[i].length > 0)
          line3_count++
      }

      if (line1_count === 5 && line2_count === 3 && line3_count === 5) {
        hide_error = true 
      } 
    }

    this.setState({
      poem_value: event.target.value,
      hide_error: hide_error
    })
  }

  render() {
    let error_div = 
      <div id="poem-validation-error" style={{color: 'red'}}>
        This poem is not written in the right structure!
      </div>

    if (this.state.hide_error) {
      error_div = null
    }

    return (
      <div>
        <textarea rows="3" cols="60" 
          value={this.state.poem_value}
          onChange={this.handlePoemChange}
        />

        {error_div}

      </div>
    );
  }
}

export default PoemWriter;
