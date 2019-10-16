import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from './reducers'
import Disclaimer from './components/Disclaimer'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults';

// import './App.css';

const state = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <Provider store={state}>
        <Disclaimer />
        <SearchForm />
        <SearchResults />
      </Provider>
    </div>
  );
}

export default App;
