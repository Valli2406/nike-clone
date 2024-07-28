import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth-slice';
import CartPage from '../CartPage/CartPage';
import ProductPage from '../ProductPage/ProductPage';
import Auth from '../Authentication/Auth';
import Favourite from '../Favourite/Favourite';
import UpperBar from '../UpperBar/UpperBar';
import Navigation from '../Navigation/nav';
import Logout from '../Authentication/Logout';
import Home from '../Home';
import './Pages.css';

function Pages({ handleChange, query, handleInputChange, result }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <>
            <div className={isHomePage ? 'no-scroll' : ''}>
                <ConditionalUpperbar />
                <ConditionalNavbar query={query} handleInputChange={handleInputChange} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<ProductPage handleChange={handleChange} result={result} />} />
                    <Route path='cart' element={<CartPage />} />
                    <Route path='auth' element={<ConditionalAuth />} />
                    <Route path='favourites' element={<Favourite />} />
                </Routes>
            </div>
        </>
    );
}

const ConditionalAuth = () => {
    const user = useSelector(selectUser);
    return <div>{user ? <Logout /> : <Auth />}</div>;
};

const ConditionalNavbar = ({ query, handleInputChange }) => {
    const location = useLocation();
    return (location.pathname !== '/auth' && location.pathname !== '/') ? (
        <Navigation query={query} handleInputChange={handleInputChange} />
    ) : null;
};

const ConditionalUpperbar = () => {
    const location = useLocation();
    return (location.pathname !== '/auth' && location.pathname !== '/') ? <UpperBar /> : null;
};

export default Pages;
