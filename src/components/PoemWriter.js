import React from 'react';

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
      errorVisible: true,
    };
  }

  handleInput = (event) => {
    this.setState({
      textValue: event.target.value,
    });

    var textLines = event.target.value.split("\n");

    if (textLines.length === 3) {
      var firstLineWords = textLines[0].split(" ").remove('');
      var secondLineWords = textLines[1].split(" ").remove('');
      var thirdLineWords = textLines[2].split(" ").remove('');
    }

    if (textLines.length === 3 && firstLineWords.length === 5 && secondLineWords.length === 3 && thirdLineWords.length === 5) {
        this.setState({
          errorVisible: false,
        });

    } else {
      this.setState({
        errorVisible: true,
      });
    }
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.textValue}
          onChange={this.handleInput}
        />
        {
          this.state.errorVisible 
          ? <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
        "This poem is not written in the right structure!" 
        </div>
        
          : null
        }
      </div>
    );
  }
}

export default PoemWriter;