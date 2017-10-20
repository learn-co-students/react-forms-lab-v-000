import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poem: '',
      legitPoem: false
    };
  }

  checkPoem = (poem) => {
    let splitPoem, lines;

    String.prototype.trim = function() {
      return this.replace(/\s{2,}/g, ' ');
    };
    
    splitPoem = (poem.split('\n'));

    if (splitPoem.length === 3) {
      lines = splitPoem.map(function(ln) {
        return ln.trim();
      });
      if (lines[0].split(' ').length === 5 && lines[1].split(' ').length === 3 && lines[2].split(' ').length === 5) {
        return true;
      } else {     
        return false;
      }
    } 
  }

  handleChange = (event) => {
    this.setState({
      poem: event.target.value, 
      legitPoem: this.checkPoem(this.state.poem)
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" name="poem" value={this.state.poem} onChange={this.handleChange} />
        {!this.state.legitPoem && <div id="poem-validation-error" style={{color: 'red'}} >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;





