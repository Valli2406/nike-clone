import React from 'react'

function Gender({handleChange}) {
  return (
    <div className='category-body'>
    <h2 className='sidebar-title'> Shop By Price</h2>
    <div className='sidebar-label-menu'>
    <label className='sidebar-label-container'>
      <input
        type='radio'
        name=" test"
        value="0 - 50"
        onChange={handleChange} />
      <span className='checkmark'></span>0$ - 50$
    </label>
    <label className='sidebar-label-container'>
      <input
        type='radio'
        name=" test" 
        value="50 - 100"
        onChange={handleChange}/>
      <span className='checkmark'></span> 50$ - 100$
    </label>
    <label className='sidebar-label-container'>
      <input
        type='radio'
        name=" test" 
        value="100 - 150"
        onChange={handleChange}/>
      <span className='checkmark'></span>100$ - 150$
    </label>
    <label className='sidebar-label-container'>
      <input
        type='radio'
        name=" test" 
        value="200+"
        onChange={handleChange}/>
      <span className='checkmark'></span>Over 150$
    </label>
    </div>
  </div>
  )
}

export default Gender