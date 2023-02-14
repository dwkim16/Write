import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Title.';
  let [title, setTitle] = useState('Title 1');
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Write.</h4>
      </div>

      <div className="list">
        <h4 onClick={ () => {setModal(!modal)} }>{ title }<span onClick={ () => {setLike(like + 1)} }> 👍 </span>{ like }</h4>
        <p>Published on Feb 17</p>
      </div>

      {
        modal ? <Modal/> : null
      }

      

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h4>Title</h4>
        <p>Date</p>
        <p>Content</p>
    </div>

  )
}

export default App;
