import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState([]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [contentNumber, setContentNumber] = useState(0);
  let [input, setInput] = useState('');
  let today = new Date().toLocaleDateString()

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Write.</h4>
      </div>

      {
        title.map(function(a, i){ // Like python enumerator. each div needs key
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setContentNumber(i)}}>{ a }
                <span onClick={(e) => {
                    e.stopPropagation(); // stop event bubbling (only clicking span not h4 and div)
                    // we need to copy the original data and reassign 
                    // because array variable only contains pointer to the array address.
                    let copy = [...like] // like arr 괄호 벗기고 다시 씌우기 (새 데이터 생성. shallow/deep copy)
                    copy[i] += 1
                    setLike(copy) // need to set the whole array again
                  }}>
                    { ' 👍 ' }
                </span> { like[i] }
              </h4>
              <p>{ today }</p>
              <button onClick={() => {
                let copy = [...title];
                copy.splice(i, 1); // delete [i]
                setTitle(copy);
                let newLike = [...like];
                newLike.splice(i, 1); // put new element at [0]
                setLike(newLike);
              }}>
                Delete
              </button>
            </div>
          )
        })
      }

    <form onSubmit={(e) => {
      e.preventDefault();
      let copy = [...title];
      copy.unshift(input); // put new element at [0]
      setTitle(copy);
      let newLike = [...like];
      newLike.unshift(0); // put new element at [0]
      setLike(newLike);
    }}>
      <input required type="text" placeholder="Write something." onChange={(e) => { 
          setInput(e.target.value);
          }} />
        <button type="submit">
            Create
        </button>
    </form>

      {
        modal ? <Modal color='lightgray' title={title} contentNumber={contentNumber} today={today} /> : null
      }

      

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background: props.color}}>
        <h4>{props.title[props.contentNumber]}</h4>
        <p>{ props.today }</p>
        <p>Content</p>
        <button>edit</button>
    </div>

  )
}

export default App;
