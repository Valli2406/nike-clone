import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Products from '../Products/products';
import AnimatedBar from '../AnimatedBar/AnimatedBar';
import Footer from '../Footer/Footer';


function ProductPage({ handleChange, result }) {
    return (
        <>
            <div>

                <AnimatedBar />
                <Sidebar handleChange={handleChange} />
                <Products result={result} />
                <Footer />
            </div>

        </>
    )
}

export default ProductPage