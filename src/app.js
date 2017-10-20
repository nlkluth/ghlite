import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gql, graphql } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <Link to="graphql">
            Go to GraphIql
          </Link>
        )}
      </div>
    );
  }
}

const TestQuery = gql`query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}`;

export default graphql(TestQuery)(App);
