import React from 'react';


const validPoem = function (content) {
  let lines = content.split('\n');

  if (lines.length === 3) {
    let lineOneLength = lines[0].split(' ').filter(l => l).length;
    let lineTwoLength = lines[1].split(' ').filter(l => l).length;
    let lineThreeLength = lines[2].split(' ').filter(l => l).length;


    if (lineOneLength === 5 && lineTwoLength === 3 && lineThreeLength === 5) {
      return true;
    } else {
      return false;
    }
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textAreaValue: '',
      validPoem: false

    };
  }

    updateTextArea = function (e) {

      this.setState({
        textAreaValue: e.target.value,
        validPoem: validPoem(e.target.value),
      })
    }.bind(this);

    render()
    {
      return (
        <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.updateTextArea}
          value={this.state.textAreaValue}
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
