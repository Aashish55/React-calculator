import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title"> Calculator made with React.</h1>
      <div className="calculatorWrapper">
        <div className="row">
          <input disabled='true' className='inputSection' />
        </div>
        <div className="row">
          <button className="AC">AC</button>
          <button className="back" >Del</button>
          <button >/</button>
        </div>
        <div className="row">
          <button >7</button>
          <button >8</button>
          <button >9</button>
          <button >*</button>
        </div>
        <div className="row">
          <button >4</button>
          <button >5</button>
          <button >6</button>
          <button >-</button>
        </div>
        <div className="row">
          <button >1</button>
          <button >2</button>
          <button >3</button>
          <button >+</button>
        </div>
        <div className="row">
          <button >.</button>
          <button >0</button>
          <button >00</button>
          <button className='equalTo' >=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
