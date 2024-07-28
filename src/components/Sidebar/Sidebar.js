// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import Price from './Price/Price'
import Category from './Category/Category'
import Recommended from './Recommended/Recommended';
import Gender from './Gender/Gender';
class Sidebar extends React.Component {
   

    render() {
        const { handleChange } = this.props;  
       
        return (
           
            <>
                <aside className='sidebar'>
                    <Category handleChange ={handleChange} />
                  <Price handleChange ={handleChange}/>
                  <Gender handleChange ={handleChange}/>
                </aside>
            </>
        );
    }
}

export default Sidebar;
