
// NO WAY I WAS GOING TO GET THE RIGHT SOLUTION HERE.
// IMPLEMENTING FLATIRON SOLUTION:

import React from "react";

const isValidPoem = poem => {
    // THE SPLIT MAKES POEMLINES AN ARRAY
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;

    // DOES 'POEM' IN LINE BELOW SIMPLY MEAN THERE IS AN ARGUMENT -- SOMETHING HAS
    // BEEN PASSED IN?
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
      // WHAT DOES THIS MEAN?  WHAT IS 'CONTENT' HERE WITHOUT ANYTHING ELSE?
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
        // THEY SEEM TO BE INSERTING A CONDITIONAL HERE BASED ON ISVALID
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
//
//     this.state = {
//       text: ''
//     };
//   }
//
//   handleTextChange = event => {
//
//
//   }
//
//   render() {
//     return (
//       <div>
//         <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleTextChange}/>
//         <div id="poem-validation-error" style={{ color: "red" }}>
//           This poem is not written in the right structure!
//         </div>
//       </div>
//     );
//   }
// }
//
// export default PoemWriter;
