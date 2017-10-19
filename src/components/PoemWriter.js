import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poem: ''
    };
  }

  checkPoem = (poem) => {
    const err = document.querySelector('#poem-validation-error');
    let splitPoem, lines;

    String.prototype.trim = function() {
      return this.replace(/\s{2,}/g, ' ');
    };
    
    splitPoem = (poem.split('\n'));

    if (splitPoem.length === 3) {
      lines = splitPoem.map(function(ln) {
        return ln.trim();
      });
      //console.log(lines[0].split(' ').length);
      if (lines[0].split(' ').length === 5 && lines[1].split(' ').length === 3 && lines[2].split(' ').length === 5) {
        err.style.display = 'none';
      } else {     
        err.style.display = 'block';
      }
    } 
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, this.checkPoem(this.state.poem));
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" name="poem" value={this.state.poem} onChange={this.handleChange} />
        <div id="poem-validation-error" style={{color: 'red'}} >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
