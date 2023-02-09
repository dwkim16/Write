import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Title.';
  let [title, changeFn] = useState('Title 1');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Write.</h4>
      </div>
      <div className="list">
        <h4>{ title }</h4>
        <p>Published on Feb 17</p>
      </div>
    </div>
  );
}

export default App;
