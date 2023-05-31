import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Digital</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/16673234/pexels-photo-16673234.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <span>Jhon</span>
        <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar