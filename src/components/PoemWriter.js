import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const poemText = this.state.value

    let error = null;
    if (poemText === '' || poemText.split("\n").length === 2) {
      error =  <div
                id="poem-validation-error"
                style="{{color: 'red'}}"
              >
                This poem is not written in the right structure!
              </div>;
    }
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
          {error}
      </div>
    );
  }
}

export default PoemWriter;
