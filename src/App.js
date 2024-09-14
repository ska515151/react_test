import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [a, b] = useState('남자 코트 추천')
  let [a2, b2] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ () => { b('여자 코트 추천') } }>title 변경</button>
      <div className='list'>
        <h3>{ a } <span onClick={() => { b2(a2+1) }}>🙂</span> { a2 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal title={ a } date={ '2월 17일 발행' } content={ '123' }  />

    </div>
  );
}

const Modal = ({ title, date, content }) => {
  return (
    <div className='modal'>
        <h2>{ title }</h2>
        <p>{ date }</p>
        <p>{ content }</p>
      </div>
  )
}

export default App;