import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import GraphIql from './GraphIql';
import registerServiceWorker from './registerServiceWorker';

const authorizationKey = process.env.REACT_APP_GITHUB_GRAPHQL_KEY;
const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql'
}).use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      req.options.headers.authorization = `Bearer ${authorizationKey}`
      next();
    }
  }
]);

const client = new ApolloClient({ networkInterface });

const Routes = () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/graphql" component={GraphIql} />
  </Switch>
);

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
