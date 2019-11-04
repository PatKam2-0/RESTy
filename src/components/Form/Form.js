import React, { Component } from 'react';
import getApi from '../../services/api';
import BodyDisplay from '../BodyDisplay/BodyDisplay';
import HistoryList from '../HistoryList/historyList';

export default class Form extends Component {

  state = {
    history: [],
    apiResponses: [],
    url: '',
    method: '',
    jsonEntry: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getApi(this.state.url, this.state.name)
      .then(result => {
        console.log(result);
        this.setState({ apiResponses: result.results  });
        this.setState(state => ({ history: [{ url: this.state.url, method: this.state.method }, ...state.history] }));
        console.log(this.state);
      });
  }

  render() {
    return (

      <>
        <HistoryList history={this.state.history} />
        <form onSubmit={this.handleSubmit}>
          <section>
            <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
            <div>
              <label htmlFor="GET">GET
                <input type="radio" name="method" value="GET" id="GET" onChange={this.handleChange} />
              </label>
              <label htmlFor="POST">POST
                <input type="radio" name="method" value="POST" id="POST" onChange={this.handleChange} />
              </label>
              <label htmlFor="PUT">PUT
                <input type="radio" name="method" value="PUT" id="PUT" onChange={this.handleChange} />
              </label>
              <label htmlFor="PATCH">PATCH
                <input type="radio" name="method" value="PATCH" id="PATCH" onChange={this.handleChange} />
              </label>
              <label htmlFor="DELETE">DELETE
                <input type="radio" name="method" value="DELETE" id="DELETE" onChange={this.handleChange} />
              </label>
              <button>Go!</button>
            </div>
          </section>
          <div id="body">
            <textarea type="text" name="requestBody" value={this.state.jsonEntry} onChange={this.handleChange} ></textarea>
          </div>
          <div>
            <BodyDisplay apiResponses={this.state.apiResponses} />
          </div>
        </form>
      </>
    );
  }
}
