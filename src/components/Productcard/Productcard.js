import React from 'react'
import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Productcard.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { favouriteActions } from '../../store/Favourite-slice';
function Productcard({ productItem }) {
    const productName = productItem.productName;
    const articleNo = productItem.articleNo;
    const price = productItem.salePrice ? productItem.salePrice : productItem.listPrice;
    const imageUrl = productItem.imageUrl;
    const division = productItem.division;
    const category = productItem.category;
    const cart = () => toast("Added to cart succesfully!");
    const Favourite =() => toast("Added to favourites succesfully!");
    const dispatch = useDispatch();
    const addToCart = () => {
        // console.log(productName);
        // console.log(articleNo);
        // console.log(price);
        // console.log(imageUrl);

        dispatch(cartActions.addToCart({
            productName,
            articleNo,
            price,
            imageUrl,
            division,
            category,
        })
        );
    }
    const addToFavourite = () => {
        // console.log(productName);
        // console.log(articleNo);
        // console.log(price);
        // console.log(imageUrl);

        dispatch(favouriteActions.addToFavourite({
            productName,
            articleNo,
            price,
            imageUrl,
            division,
            category,
        })
        );
    }



    return (
        <>

            <div className='product-card'>
                <img src={productItem.imageUrl} alt={productItem.productName} className='image' />
                <div className='content'>
                    <h3 className='tittle'>{productItem.productName}</h3>
                    <p className='description'> <span>{productItem.division} </span><span>{productItem.category} </span></p>
                    <div className='inline'>
                        <div className='price'>{productItem.salePrice ? (
                            <div>
                                <span style={{ textDecoration: 'line-through', color: 'grey', marginRight: '10px' }}>
                                    ${productItem.listPrice}
                                </span>
                                <span style={{ color: 'green' }}>
                                    ${productItem.salePrice}
                                </span>
                            </div>
                        ) : (
                            <span>${productItem.listPrice}</span>
                        )}</div>

                        <button className='btn' onClick={() => { addToCart(); cart(); }}>
                            <IoBagOutline className='nav-icons' />
                        </button>
                        <ToastContainer />
                        <button className='btn' onClick={()=>{addToFavourite(); Favourite();}}><FiHeart className='nav-icons' /></button>
                        <ToastContainer />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Productcard