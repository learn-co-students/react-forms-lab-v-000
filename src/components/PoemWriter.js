import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      verses: "",
    };
  };

  setPoem = event => {
     this.setState({
       verses: event.target.value
     });
   };

  validatePoem = () => {
    const poem = this.state.verses
    const verses = poem.split("\n").map(line => line.trim());
    console.log(verses)
    const isValidPoemLength = (verses.length === 3)
    console.log("Validate Poems Length:", isValidPoemLength)

    if (poem && isValidPoemLength) {
      const isValidVersesLength = (verses[0].split(" ").length === 5 && verses[1].split(" ").length === 3 && verses[2].split(" ").length === 5)
      console.log("Verse 1:",  verses[0].split(" "))
      console.log("Validate lines length:", isValidVersesLength)
      if (isValidVersesLength){
      return true
      } else {
        return false
      }
    }
    else {
      return false
    }
  }

  isValid = () => {
    const isvalidPoem = this.validatePoem()
    if(!isvalidPoem) {
      return (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      )
    } else {
     return null
      }
    }


  render(){
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.verses}
          onChange={this.setPoem}
        />
        <div>{this.isValid()}</div>
      </div>
    );
  }
}

// {!this.validatePoem() ? (
//   <div id="poem-validation-error" style={{ color: "red" }}>
//     This poem is not written in the right structure!
//   </div>
// ) : null}
export default PoemWriter;
