import React from 'react'
import './Category.css'
function Category({handleChange}) {
    return (
        <div className='category-body'>
            <h2 className='Sidebar-title'>Category</h2>
            <div className='sidebar-label-menu'>
                <label className='sidebar-label-container'>
                    <input onChange={handleChange}
                        type='radio'
                        name=" test"
                        value="All" />
                    <span className='checkmark'></span> All
                </label>

                <label className='sidebar-label-container'>
                    <input onChange={handleChange}
                        type='radio'
                        name=" test"
                        value="Shoes" />
                    <span className='checkmark'></span> Shoes
                </label>

                <label className='sidebar-label-container'>
                    <input onChange={handleChange}
                        type='radio'
                        name=" test" 
                        value="Clothing"/>
                    <span className='checkmark'></span>Clothes
                </label>

                <label className='sidebar-label-container'>
                    <input onChange={handleChange}
                        type='radio'
                        name=" test" 
                        value="Swimming"/>
                    <span className='checkmark'></span> Swimwear
                </label>

                
                <label className='sidebar-label-container'>
                    <input onChange={handleChange}
                        type='radio'
                        name=" test" 
                        value="Accessories"/>
                    <span className='checkmark'></span> Accessories
                </label>
              
               
            </div>
        </div>
    )
}

export default Category