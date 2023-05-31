import React from 'react'
import Cam from '../img/cam.jfif';
import Add from '../img/add.jfif';
import More from '../img/more.jfif';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>janeee</span>
        <div className='chatIcons'>
          <img src={Cam} alt='' />
          <img src={Add} alt='' />
          <img src={More} alt='' />
        </div>
        
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat