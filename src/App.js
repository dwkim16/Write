import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['Title 1 ', 'Title 2 ', 'Title 3 ']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Write.</h4>
      </div>

      {
        title.map(function(a, i){ // Like python enumerator. each div needs key
          return (
            <div className="list" key={i}>
              <h4 onClick={ () => {setModal(!modal)} }>{ a }
                <span onClick={ () => {
                  // we need to copy the original data and reassign 
                  // because array variable only contains pointer to the array address.
                  let copy = [...like] // like arr 괄호 벗기고 다시 씌우기 (새 데이터 생성. shallow/deep copy)
                  copy[i] += 1
                  setLike(copy) // need to set the whole array again
                }}>
                    👍
                </span> { like[i] }
              </h4>
              <p>Published on Feb 17</p>
            </div>
          )
        })
      }

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
