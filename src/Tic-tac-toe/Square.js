import React from 'react'
import './All.css';

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='main-square'>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square  
