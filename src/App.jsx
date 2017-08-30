import React, { Component } from 'react';
import marked from 'marked';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {mark: ''}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({mark:event.target.value})
  }

  render() {
    return(
      <div className='row'>
        <div className='col-md-6'>
          <h4>Markdown Input</h4>
          <textarea
            placeholder='Type GitHub-flavored Markdown'
            onChange={this.handleChange}
            value={this.state.mark}/>
        </div>
        <div className='col-md-6'>
          <h4>Mardown Output</h4>
          <div className='output' dangerouslySetInnerHTML={{__html:marked(this.state.mark)}}></div>
        </div>
      </div>
    );
  }
}

export default App;
