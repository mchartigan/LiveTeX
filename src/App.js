import React from 'react';
import MathJax from 'mathjax3-react';
import { Container, Segment, Form, TextArea } from 'semantic-ui-react';
import './App.css';

// dynamically create lines to make multi-line equations
class Line extends React.Component {
  render () {
    return (
      <MathJax.Formula formula={ "$$ " + this.props.formula + " $$"} />
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    // improve rendering speed by not re-rendering needlessly
    return this.props.formula !== nextProps.formula;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      formulas: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // update LaTeX in a controlled component
  handleChange(event) {
    this.setState({ text: event.target.value });
    this.setState({ formulas: event.target.value.split(/(?:\n)/g) });  
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
              {this.state.formulas.map(text => (
                <Line formula={text}/>
              ))}
            </MathJax.Provider>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;