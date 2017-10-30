import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isPoemValid: false
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
    const poem = this.state.value.split('\n');
    if (poem.length === 3) {
        let arr = [];
        poem.forEach((line) => {
          arr.push(line.split(' ').filter((w) => w !== '').length);
        });
        if (arr.join('') === '535') {
          this.setState({isPoemValid: true})
        }
    }
    // console.log('is poem valid?', this.state.isPoemValid)
  }

  errorMessage = () => {
    if (!this.state.isPoemValid) {
      return <div
        id="poem-validation-error"
        style={{color: 'red'}}
      >
        This poem is not written in the right structure!
      </div>

    }
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.value}
          rows="3"
          cols="60"
        />
          {this.errorMessage()}
      </div>
    );
  }
}

export default PoemWriter;
