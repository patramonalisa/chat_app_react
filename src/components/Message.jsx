import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src='https://images.pexels.com/photos/16380570/pexels-photo-16380570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
      <p>hello</p>
      <img alt='' src='https://images.pexels.com/photos/16380570/pexels-photo-16380570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />  
      </div>
    </div>
  )
}

export default Message