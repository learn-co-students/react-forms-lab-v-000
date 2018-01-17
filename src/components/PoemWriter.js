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
/*
You'll find one <textarea> in this component. Make this a controlled component. Recall that controlled components
  in React render dynamically based on some piece of props or state. Its value should be saved in the components state.

You'll also find an error element in the markup. This element should only be shown if the poem is not valid.

The rules for a valid poem structure are as follows:
  The poem has three lines.
  The first line has five words.
  The second line has three words.
  The third line has five words.

Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is not 
  a valid first line of the poem.

 Make sure the error message is still showing if the user deletes all of their content from the textarea box
*/