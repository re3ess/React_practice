/* eslint-disable */

import React, { useState } from 'react';
import './App.css'

const App = () => {

  let post = 'MapleStory'
  const [logo, setLogo] = useState(['React Blog', 'Javascript Blog', 'Vue Blog'])
  const [good, setGood] = useState(0)
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState(0)
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Practice</h4>      
      </div>

      {
        logo.map(function(a,i){
          return (
            <div className='list' key={i}>

              <h4 onClick={()=>{setModal(true)}}>{logo[i]}
              <span ocClick={()=>{setGood(good + 1)}}>
                👍🏻
              </span> {good}
              </h4>
            </div>
          )
        })
      }

        {
          modal === true ? <Modal logo={logo} color={'#AFBFC0'}/> : null
        }

    </div>
  );
};

function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}> 
        <h4>{props.logo[0]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
  )
}

export default App;
