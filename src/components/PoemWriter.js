import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          rows="3"
          cols="60"
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          {(()=> {
            if (this.state.text !== '') {
              null;
            } else {
              return 'This poem is not written in the right structure!';
            }
          })()}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
