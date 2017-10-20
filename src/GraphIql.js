import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import './graphiql.css';

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

const GraphIql = () => (
  <GraphiQL fetcher={graphQLFetcher} editorTheme="solarized light" />
);

export default GraphIql
