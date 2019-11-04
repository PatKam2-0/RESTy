import React, { Component } from 'react';
import getApi from '../../services/api';
import BodyDisplay from '../BodyDisplay/bodyDisplay';
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
        this.setState({ apiResponses: result });
        this.setState(state => ({ history: [{ url: this.setState.url, method: this.setState.method }, ...state.history] }));
      });
  }

  render() {
    return (

      <>
        <HistoryList history={this.state.history} />
        <form onSubmit={this.handleSubmit}>
          <section>
            <input type="text" name="url" value={this.state.url} onChange={this.handleChange}></input>
            <div>
              <label htmlFor="GET">GET
                <input type="radio" name="method" value="GET" id="GET" onChange={this.handleChange}></input>
              </label>
              <label htmlFor="POST">POST
                <input type="radio" name="method" value="POST" id="POST" onChange={this.handleChange}></input>
              </label>
              <label htmlFor="PUT">PUT
                <input type="radio" name="method" value="PUT" id="PUT" onChange={this.handleChange}></input>
              </label>
              <label htmlFor="PATCH">PATCH
                <input type="radio" name="method" value="PATCH" id="PATCH" onChange={this.handleChange}></input>
              </label>
              <label htmlFor="DELETE">DELETE
                <input type="radio" name="method" value="DELETE" id="DELETE" onChange={this.handleChange}></input>
              </label>
              <button>Go!</button>
            </div>
          </section>
          <div id="body">
            <textarea name="requestBody" value={this.state.jsonEntry} onChange={this.handleChange} ></textarea>
          </div>
          <div>
            <BodyDisplay results={this.state.results} />
          </div>
        </form>
      </>
    );
  }
}
