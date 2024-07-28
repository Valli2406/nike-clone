import React from 'react'

import { useSelector } from 'react-redux'
import './Favourite.css'
import FavouriteProduct from './FavouriteProduct'
function Favourite() {
  const favouriteproduct = useSelector((state) => state.favourites.favouritelist);
  const totalQuantity = favouriteproduct.reduce((acc, item) => acc + item.quantity  ,0);
  return (
    <>
      {totalQuantity === 0 && <div className='font' >
        <h1>Favourites</h1>
        <h3>your favourite products will be displayed here ....</h3>
      </div>}
      {totalQuantity !== 0 && <div className='font'>
        <h1>Favourites</h1>
        <div className='favflex'>
          {favouriteproduct.map(favouriteproduct => (

            <div key={favouriteproduct.articleNo}>
              <FavouriteProduct favouriteproduct={favouriteproduct} />
            </div>
          ))}
        </div>
      </div>}
    </>
  )
}

export default Favourite