import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloProvider } from 'react-apollo';

const endpoint = 'localhost:8080/query';
import './App.css';
import TodoList from './views/TodoList';
import TodoDetails from './views/TodoDetails';

// Create an http link:
const httpLink = new HttpLink({
  uri: `http://${endpoint}`,
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://${endpoint}`,
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div style={{ height: '100vh' }}>
            <div
              style={{ display: 'flex', padding: 12, justifyContent: 'center' }}
            >
              <Link style={{ padding: 12 }} to="/list">
                About
              </Link>
              <Link style={{ padding: 12 }} to="/details">
                Topics
              </Link>
            </div>

            <div style={{ justifyContent: 'center', padding: 12 }}>
              <Route path="/list" component={TodoList} />
              <Route path="/details" component={TodoDetails} />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
