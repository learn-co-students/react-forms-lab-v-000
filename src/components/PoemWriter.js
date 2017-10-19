import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poem: ''
    };
  }

  checkPoem = (poem) => {
    let splitPoem, lines;

    String.prototype.trim = function () {
      return this.replace(/\s{2,}/g, ' ');
    };
    
    splitPoem = (poem.split('\n'));

    if (splitPoem[0] && splitPoem[1] && splitPoem[2]) {
      lines = splitPoem.map(function(ln) {
        return ln.trim() //ln.trim();
      });
      if (lines[0].split(' ').length === 5 && lines[1].split(' ').length === 3 && lines[2].split(' ').length === 5) {
        const err = document.querySelector('#poem-validation-error');
        err.style.display = 'none';
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

    if (this.state.poem) {
      this.checkPoem(this.state.poem)
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" name="poem" value={this.state.poem} onChange={event => this.handleChange(event)} />
        <div id="poem-validation-error" style={{color: 'red'}} >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
