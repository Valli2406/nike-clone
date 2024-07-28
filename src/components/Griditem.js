import React from 'react'
import './Griditem.css'
function Griditem({url}) {
  return (
    <div className='grid-item'>
       <img className='grid-item-media' src={url}/>
    </div>
  )
}

export default Griditem