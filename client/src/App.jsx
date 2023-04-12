import { useState } from 'react'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Questonnaire from './components/App/Questonnaire';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Route, Routes } from 'react-router-dom'

const httpLink = createHttpLink({
	uri: '/graphql',
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
});

//must tailwindify this
function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Questonnaire />} />
      </Routes>
    </ApolloProvider>
  );  
}

export default App;


