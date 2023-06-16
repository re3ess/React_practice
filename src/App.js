/* eslint-disable */

import React, { useState } from 'react';
import './App.css'

const App = () => {

  let post = 'MapleStory'
  const [logo, setLogo] = useState(['React Blog', 'Javascript Blog', 'Vue Blog'])
  const [good, setGood] = useState(0)
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Practice</h4>
      </div>
      <div className='list'>
        <h4>{logo[0]} <span>👍🏻</span> {good} </h4>
        <p>6월 15일</p>
      </div>
      <div className='list'>
        <h4>{logo[1]}</h4>
        <p>6월 15일</p>
      </div>
      <div className='list'>
        <h4>{logo[2]}</h4>
        <p>6월 15일</p>
      </div>
    </div>
  );
};

export default App;
