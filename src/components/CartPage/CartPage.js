import React, { useEffect } from 'react'

import './CartPage.css'
import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const itemproduct = useSelector((state) => state.cart.itemsList);
    const totalPrice = itemproduct.reduce((acc, item) => acc + item.price, 0);
    const totalQuantity = itemproduct.reduce((acc, item) => acc + item.quantity, 0);
    const shipping = totalQuantity * 5;

    // console.log("Current itemsList:", JSON.stringify(itemproduct));
    // const itemproduct = JSON.parse(itemlist);
    // const itemproduct = useSelector((state) => state.cart.itemslist);
    // const rendering = useEffect(() => {
    //     console.log('cartpage is rendered');
    //     console.log('itemproduct:', itemproduct);
    // }, [itemproduct]);
    // const itemproduct = [
    //     {
    //         "company": "NIKE",
    //         "country": "USA",
    //         "id": 1,
    //         "productName": "Nike Dunk Low",
    //         "articleNo": "FZ4349-100",
    //         "division": "Women",
    //         "category": "Shoes",
    //         "subCategory": "Lifestyle",
    //         "listPrice": 130,
    //         "salePrice": null,
    //         "currency": "USD",
    //         "description": "Created for the hardwood but taken to the streets, this '80s basketball icon returns with classic details and throwback hoops flair. Synthetic leather overlays help the Nike Dunk channel vintage style while its padded, low-cut collar lets you take your game anywhere—in comfort.",
    //         "url": "https://nike.com/us/t/dunk-low-womens-shoes-KxSmbV/FZ4349-100",
    //         "imageUrl": "https://static.nike.com/a/images/t_default/ac89cfe2-a425-41b4-b51a-facde9df1215/dunk-low-womens-shoes-KxSmbV.png"
    //     },{
    //         "company": "NIKE",
    //         "country": "USA",
    //         "id": 1,
    //         "productName": "Nike Dunk Low",
    //         "articleNo": "FZ4349-100",
    //         "division": "Women",
    //         "category": "Shoes",
    //         "subCategory": "Lifestyle",
    //         "listPrice": 130,
    //         "salePrice": null,
    //         "currency": "USD",
    //         "description": "Created for the hardwood but taken to the streets, this '80s basketball icon returns with classic details and throwback hoops flair. Synthetic leather overlays help the Nike Dunk channel vintage style while its padded, low-cut collar lets you take your game anywhere—in comfort.",
    //         "url": "https://nike.com/us/t/dunk-low-womens-shoes-KxSmbV/FZ4349-100",
    //         "imageUrl": "https://static.nike.com/a/images/t_default/ac89cfe2-a425-41b4-b51a-facde9df1215/dunk-low-womens-shoes-KxSmbV.png"
    //     }]
    return (
        <>
            <div className='page'>

                <div className='favflex'>
                    <section className='cartpagebody'>
                        <div className='freeshipping'>
                            <h2>Free Shipping For Nike Membership</h2>
                            <p>Become a nike Membership for fast and free shipping <button >join us</button> <button >sign in</button></p>
                        </div>


                    </section>
                    <div className='summary'>
                        <h1>Summary</h1>
                        <p>Total price : {totalPrice}$</p>
                        <p>Shipping Charges:  {totalQuantity} * 5$ = {totalQuantity * 5} $</p>
                        <hr />
                        <p>Total: {totalPrice + shipping} $</p>
                        <button className='cartbutton'>Place Order</button>
                    </div>

                </div>
                <div className='favflex mt'>
                    {itemproduct.map(itemproduct => (

                        <div key={itemproduct.articleNo}>
                            <CartProduct itemproduct={itemproduct} />
                        </div>
                    ))}
                </div>
            </div>
        </>


    )
}

export default CartPage