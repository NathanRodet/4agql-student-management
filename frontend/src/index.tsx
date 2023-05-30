import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from '@apollo/client/link/context';
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const httpLink = createHttpLink({
    uri: 'http://localhost:4002/graphql',
  
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>,
        </BrowserRouter>
    </React.StrictMode>,
);