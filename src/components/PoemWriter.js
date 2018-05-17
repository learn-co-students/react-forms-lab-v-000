import React from "react";

const isValidPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;
  if (poem && isRightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      isValid: true,
    };
  }

  setPoemContent = event => {
    const content = event.target.value;
    this.setState({
      content,
      isValid: isValidPoem(content),
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setPoemContent}
        />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;

// import React from "react";
//
// class PoemWriter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       poem: '',
//       isValid: false
//     };
//   }
//
//   handleChange = (event ) => {
//     this.setState({poem: event.target.value});
//     this.validatePoem();
//   }
//
//   validatePoem = () => {
//     let isValidPoem = false;
//     let poem = this.state.poem;
//     let lines = poem.split('\n');
//     let wordCountByLine = lines.map((line) => {
//       return line.split(' ').filter(word => word.length > 0).length;
//     });
//     if (lines.length === 3 && wordCountByLine[0] === 5 && wordCountByLine[1] === 3 && wordCountByLine[2] === 5){
//       isValidPoem = true;
//     }
//     this.setState({isValid: isValidPoem})
//   }
//
//
//
//   render() {
//
//     return (
//       <div>
//         <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.poem}/>
//         {this.state.isValid ? null :
//           (<div id="poem-validation-error" style={{ color: "red" }}>
//             This poem is not written in the right structure!
//             </div>)
//         }
//       </div>
//     );
//   }
// }
//
// export default PoemWriter;
