## 세팅

```
npm -g install create-react-app
npx create-react-app <project name>
```

## memo

### 01강 리액트 설치와 셋팅법
https://www.youtube.com/watch?v=nahwuaXmgt8

- 데이터 바인딩

```
import logo from './logo.svg';
import './App.css';

function App() {

  let dataBindinTest = '데이터 바인딩 테스트'

  return (
    <div className="App">
      <div className="black-nav">
        <div>
          개발 blog
        </div>
      </div>
        <h4> { dataBindinTest } </h4>
    </div>
  );
}

export default App;
```

### React 기초 3강 : 리액트에선 변수말고 state 만들어 쓰랬죠 (useState)

```
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [a, b] = useState('남자 코트 추천')

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>{ a }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
```

### React 기초 4강 : 리액트에서 버튼에 이벤트 리스너 (핸들러) 장착하는 법

```
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
    </div>
  );
}

export default App;
```

### React 기초 6강 : Component로 HTML 깔끔하게 줄이는 법

```
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
```