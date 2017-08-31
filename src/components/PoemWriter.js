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
        {(()=> {
          const entry = this.state.text.split(/\r\n|\r|\n/);

          if (
            entry.length === 3 &&
            entry[0].trim().split(' ').length === 5 &&
            entry[1].trim().split(' ').length === 3 &&
            entry[2].trim().split(' ').length === 5
          ) {
            null;
          } else {
            return (
              <div
                id="poem-validation-error"
                style={{color: 'red'}}
              >
                return 'This poem is not written in the right structure!';
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default PoemWriter;
