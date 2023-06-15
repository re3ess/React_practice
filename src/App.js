import React, { useState } from 'react';
import './App.css'

const App = () => {

  let post = 'MapleStory'
  const [logo, setLogo] = useState('React Blog')

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      <div className='list'>
        <h4>글 제목</h4>
        <p>6월 15일</p>
      </div>
    </div>
  );
};

export default App;
