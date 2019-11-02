import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ method }) {

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


Form.propTypes = {
  method: PropTypes.string.isRequired
};
