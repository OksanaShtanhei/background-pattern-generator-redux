import React, {useState} from 'react';
import Modal from './Modal'
import './index.css'
import { useSelector } from 'react-redux';

const getElements = (items)=> {
  let content = []
  for(let i = 0; i < items; i++){
      content.push(i)
  }
  return content
}

function App() {
  const corners = useSelector(state => state.map(el => el + 'px'))

  const borderR = corners.join(' ')
  const screenWidth = window.screen.width
  const num = getElements(Math.floor(screenWidth/50))
  const radioBtn = ['one', 'two', 'three', 'four']
  let cellStyles = {
    width: '5vw',
    height: '5vh',
    background: 'black',
    border: '2px solid white',
    borderRadius: `${borderR}`,
}
console.log(screenWidth/50)
  return (
    <div className="App">
      <div className="modal-container">
        <h5>Choose corners</h5>
          <ul className="check">
            {radioBtn.map((el) => {
              return <li key={el}>
                        <Modal el={el} key={el} />
                      </li>
            })}
        </ul>
      </div>
      {num.map(el => {
        return <div className='col' key={el}>
          {num.map(el => {
            return <div key={el} style={cellStyles} className='cell'></div>
          })}
        </div>
      })}
    </div>
  );
}

export default App;
