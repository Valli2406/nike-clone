import React from 'react'
import './Price.css'
function Price({ handleChange }) {
  
  return (
    <div className='category-body'>
      <h2 className='sidebar-title'> Gender </h2>
      <div className='sidebar-label-menu'>
      <label className='sidebar-label-container'>
        <input
          type='radio'
          name=" test"
          value="Male"
          onChange={handleChange} />
        <span className='checkmark'></span> Male
      </label>
      <label className='sidebar-label-container'>
        <input
          type='radio'
          name=" test" 
          value="Female"
          onChange={handleChange}/>
        <span className='checkmark'></span> Female
      </label>
      <label className='sidebar-label-container'>
        <input
          type='radio'
          name=" test" 
          value ="Unisex"
          onChange={handleChange}/>
        <span className='checkmark'></span> Unisex
      </label>
      <label className='sidebar-label-container'>
        <input
          type='radio'
          name=" test" 
          value ="Kids"
          onChange={handleChange}/>
        <span className='checkmark'></span> Kids
      </label>
      </div>
    </div>
  )
}

export default Price