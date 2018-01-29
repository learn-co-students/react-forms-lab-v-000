import React from "react";

function checkValidity(string)  {

  var ary = string.split('\n')
  if (ary.length === 3)
  { var array = ary.map(function(el) {return el.trim()})
    if ((wordCount(array[0]) === 5) && (wordCount(array[1]) === 3) && (wordCount(array[2]) === 5))
  {return true}
    return false
    }
  else
  {return false}
}

function wordCount(string) {
  var words = string.split(" ");
  return words.length;
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }
  onPoemChange = event => {
    const value = event.target.value
    this.setState({
      poem: value,
      valid: checkValidity(value)

    })
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.onPoemChange}/>
        <div id={this.state.valid ? null : "poem-validation-error" } style={{ color: "red" }} hidden={this.state.valid}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;


// You'll find one <textarea> in this component. Make this a controlled component. Recall that controlled components in React render dynamically based on some piece of props or state. Its value should be saved in the components state.
// You'll also find an error element in the markup. This element should only be shown if the poem is not valid.
// The rules for a valid poem structure are as follows:
// The poem has three lines.
// The first line has five words.
// The second line has three words.
// The third line has five words.
// Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is not a valid first line of the poem.
// Make sure the error message is still showing if the user deletes all of their content from the textarea box
