import QuestionList from './QuestionList';
import React, {Component} from 'react'

class App extends Component{
  state = {
    search: ''
  };
  handleChange = (e) => this.setState({search: e.target.value});
  render(){
    const {search} = this.state;

    return (
        <div>
          <header>
            <div className="container">
              <h1>MCQ</h1>
              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="poo" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-poo fa-w-16 fa-7x">
                <g>
                  <path fill="currentColor"
                        d="M451.4 369.1A71.77 71.77 0 0 0 408 240h-14.1A63.74 63.74 0 0 0 352 128h-5.9a94.61 94.61 0 0 0 5.9-32 96 96 0 0 0-96-96 93.1 93.1 0 0 0-15.1 1.5A79.79 79.79 0 0 1 176 128h-16a63.74 63.74 0 0 0-41.9 112H104a71.77 71.77 0 0 0-43.4 129.1A71.9 71.9 0 0 0 72 512h368a71.9 71.9 0 0 0 11.4-142.9zM320 256a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm-128 0a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm159.5 139C341 422.9 293 448 256 448s-85-25.1-95.5-53a8.2 8.2 0 0 1 7.8-11h175.4a8.2 8.2 0 0 1 7.8 11z"
                        className="fa-secondary"/>
                  <path
                      d="M320 256a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm-128 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"/>
                </g>
              </svg>
            </div>
          </header>

          <div id="search-box">
            <input onChange={this.handleChange} value={search} type="search" name="search" placeholder="Search for a Question" autoComplete="true" autoFocus/>
          </div>

          <QuestionList searchTerm={search}/>

          <footer>
            <div className="container">
              <p>Original Design by @islamhanii, questions compiled by @ahmed-dardery</p>
            </div>
          </footer>

        </div>
    );
  }
}

export default App;
