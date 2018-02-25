import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      hidden: 'no'
    };
  }

  updatePoem = (changeEvent) => {
    this.setState({
      poem: changeEvent.target.value,
      hidden: 'no'
    }, () => {
      const lines = this.state.poem.split('\n');

      for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/\s+$/g, '');
      }

      if (lines.length === 3 && lines[2].match(/\s+/g) && lines[2].match(/\S+/g)) {
        const firstLineSpaces = lines[0].match(/\s+/g);
        const secondLineSpaces = lines[1].match(/\s+/g);
        const thirdLineSpaces = lines[2].match(/\s+/g);

        const firstLineWords = lines[0].match(/\S+/g);
        const secondLineWords = lines[1].match(/\S+/g);
        const thirdLineWords = lines[2].match(/\S+/g);

        if (firstLineWords.length === 5 && secondLineWords.length === 3 && thirdLineWords.length === 5) {
          if (firstLineSpaces.length === 4 && secondLineSpaces.length === 2 && thirdLineSpaces.length === 4) {
            this.setState({
              hidden: 'yes'
            });
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.updatePoem} value ={this.state.poem}/>
        {this.state.hidden === 'no' &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
