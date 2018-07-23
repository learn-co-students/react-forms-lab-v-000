import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      showError: 'block'
    };
  }

  updatePoem = (event) => {
    //event.persist()
    this.setState({
      poem: event.target.value,
      showError: this.checkPoemStructure(event)
    })
    
  }

  checkPoemStructure = (event) => {
    let rows = event.target.value.split(/\n/)
    let wordCount = rows.map(row => {
      let words = row.split(/\s/)
      return words.filter(word => word !== "").length
    })
    if ((rows.length === 3) && (wordCount[0] === 5) && (wordCount[1] === 3) && (wordCount[2] === 5)){
      return 'none'
    } else {
      return 'block'
    }
  }

  render() {
    const style1 = {
      color: 'red'
    }
    let poemError = <div id="poem-validation-error" style={{color: 'red'}}>
            This poem is not written in the right structure!
          </div>
      
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.updatePoem} />
        {(this.state.showError === 'block') ? poemError : null}
        
      </div>
    );
  }
}

export default PoemWriter;
