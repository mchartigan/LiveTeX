import React from 'react';
import MathJax from 'mathjax3-react';
import { Container, Segment, Form, TextArea, Icon, Image, Button, Accordion } from 'semantic-ui-react';
import './App.css';
import logo from './img/livetex.png';

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
      activeIndex: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // update LaTeX in a controlled component
  handleChange(event) {
    this.setState({ text: event.target.value });
    this.setState({ formulas: event.target.value.split(/(?:\n)/g) });
  }

  handleClick(event, titleProps) {
    const { index } = titleProps;
    const newIndex = this.state.activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    return (
      <div className="App">
        <Container text>
          <Segment basic clearing textAlign="center">
            <Button color="violet" as="a" href="https://mchartigan.github.io/" floated="left">
              <Image src={process.env.PUBLIC_URL + '/favicon.ico'} avatar/>
              Go to Home
            </Button>
            <Image src={logo} centered/>
            <Button as="a" href="https://github.com/mchartigan/LiveTeX" floated="right">
              <Icon name="github"/> Visit on Github
            </Button>
          </Segment>
          <Accordion fluid styled>
            <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Details
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 0}>
              <p>
                Welcome to LiveTeX! This is an implementation of LaTeX's math mode, meant to be used to draft equations
                or save for use in papers outside of LaTeX. It lacks the functionality of programs
                such as <a href="https://www.tug.org/texlive/">TeX Live</a> or
                sites like <a href="https://www.overleaf.com/">Overleaf</a>,
                but in return offers live rendering and easy multi-line equation support.
              </p>
              <p>
                Pending features include "Copy to Clipboard" and "Save" buttons, as well as shortcuts for often-used LaTeX commands.
              </p>
              <b>Known Issues</b>
              <ol>
                <li>MathJAX may be interrupted while typesetting, causing LaTeX rendering to fail.
                  In this case, reload the page.</li>
              </ol>
            </Accordion.Content>
          </Accordion>
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
          <div id="target"></div>
          <Segment>
            <MathJax.Provider>
              {this.state.formulas.map(function(list, index) {
                return <Line key={list+"-"+index} formula={list}/>;
              })}
            </MathJax.Provider>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;