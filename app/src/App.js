import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults';

import './App.css';

const state = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <Provider store={state}>
        <SearchForm />
        <SearchResults />
      </Provider>
    </div>
  );
}

export default App;
