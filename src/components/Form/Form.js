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
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getApi(this.state.url, this.state.name)
      .then(result => {
        this.setState({ apiResponses: result });
        this.setState(state => ({ history: [{ url: this.setState.url, method: this.setState.method }, ...state.history] }));
      })
  }
}

return (
  <>
    <form onChange={method}>
      <section>
        <input type="text" placeholder="Text Here"></input>
        <div>
          <label htmlFor="GET">GET
              <input type="radio" name="method" value="GET" id="GET"></input>
          </label>
          <label htmlFor="POST">POST
              <input type="radio" name="method" value="POST" id="POST"></input>
          </label>
          <label htmlFor="PUT">PUT
              <input type="radio" name="method" value="PUT" id="PUT"></input>
          </label>
          <label htmlFor="PATCH">PATCH
              <input type="radio" name="method" value="PATCH" id="PATCH"></input>
          </label>
          <label htmlFor="DELETE">DELETE
              <input type="radio" name="method" value="DELETE" id="DELETE"></input>
          </label>
          <button>Go!</button>
        </div>
      </section>
      <section>
        <div id="body">
          <textarea placeholder="Raw JSON Body" name="requestBody"></textarea>
        </div>
      </section>
    </form>
  </>
);
}

