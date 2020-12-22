import React from 'react';
import MathJax from 'mathjax3-react';
import { Container, Segment, Form, TextArea } from 'semantic-ui-react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { this.setState({ text: event.target.value }) }

  parseText(text) {
    // Replace newlines with LaTeX array newlines (\\)
    let newText = text.replace(/(?:\n)/g, '\\\\');
    // Put text in an array so multiple lines can be used
    return ("$$\\begin{array}\\\\" + newText + "\\\\\\end{array}$$");
  }

  render() {
    return (
      <div className="App">
        <Container text>
          <Segment>
            <Form>
              <TextArea
                rows={5}
                placeholder="Type LaTeX here"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </Form>
          </Segment>
          <Segment>
            <MathJax.Provider>
              <MathJax.Formula formula={ this.parseText(this.state.text) } />
            </MathJax.Provider>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
