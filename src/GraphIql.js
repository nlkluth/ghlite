import React, { Component } from 'react';
import GraphiQL from 'graphiql';

function graphQLFetcher(graphQLParams) {
  return fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_GRAPHQL_KEY}`
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class GraphIql extends Component {
  constructor(props) {
    super(props);
    const style = document.createElement('style');
    style.setAttribute('href', '//cdn.jsdelivr.net/graphiql/0.8.1/graphiql.css')
    document.head.appendChild(style);
  }

  render() {
    return (
      <GraphiQL fetcher={graphQLFetcher} editorTheme="solarized light" />
    );
  }
}

export default GraphIql
