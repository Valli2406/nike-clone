import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import favouriteSlice from "./Favourite-slice";
import productslice from "./product-slice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice.reducer,
        favourites: favouriteSlice,
        products:productslice,

   
    },
})
export default  store;