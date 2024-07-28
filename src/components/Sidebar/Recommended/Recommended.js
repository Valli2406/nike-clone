import React from 'react'

function Recommended() {
    return (
        <div className='category-body'>
            <h2 className='sidebar-title'> Recommended </h2>
            <div className='sidebar-label-menu'>

                <label className='sidebar-label-container'>
                    <input
                        type='radio'
                        name=" test" />
                    <span className='checkmark'></span>     Nike
                </label>

                <label className='sidebar-label-container'>
                    <input
                        type='radio'
                        name=" test" />
                    <span className='checkmark'></span> Jordan
                </label>

                <label className='sidebar-label-container'>
                    <input
                        type='radio'
                        name=" test" />
                    <span className='checkmark'></span> Rafa
                </label>


            </div>
        </div>
    )
}

export default Recommended
