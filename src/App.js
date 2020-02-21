import React from 'react';
import './App.css';
import ComicForm from "./components/ComicForm";
import ComicRender from "./components/ComicRender";
import { ComicReducer as reducer } from "./reducers/ComicReducer";
import  {createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1> Two-Part Joke Randomizer</h1>
        <ComicForm/>
        <ComicRender/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
