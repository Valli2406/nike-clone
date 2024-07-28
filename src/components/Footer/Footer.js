import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className='flex'>
                    <div className='grid'>
                        <p> Gift Cards</p>
                        <p> jordan</p>
                        <p> nike </p>
                        <p>Membership</p>
                    </div>
                    <div className='grid'>
                        <p> Get Help</p>
                        <p> Order Status</p>
                        <p> Returns</p>
                        <p> Contact Us</p>
                    </div>
                    <div className='grid'>
                        <p>Shipping</p>
                        <p>Delivery</p>
                        <p> Payment options</p>
                        <p> Purpose</p>
                    </div>
                    <div className='grid'>
                        <p>Sustainability</p>
                        <p> Investors</p>
                        <p> Careers </p>
                        <p> News</p>
                    </div>
                </div>
                <div className="credit">&copy; copyright @ 2024 by <span>Nike</span>| all rights reserved</div>

            </footer>
        </div>
    )
}

export default Footer