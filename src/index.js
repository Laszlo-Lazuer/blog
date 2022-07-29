import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import dotenv from 'dotenv';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

dotenv.config();

const apollo_client = new ApolloClient({
    uri: process.env.REACT_APP_GCMS_URL
  });

ReactDOM.render(  <React.StrictMode>
    <ApolloProvider client={ apollo_client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
