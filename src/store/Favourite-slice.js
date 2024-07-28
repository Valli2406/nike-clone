import { createSlice } from "@reduxjs/toolkit"

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState: {
        favouritelist: [],
        totalQuantity: 0,
        showFavourite: false
    },
    reducers: {
        addToFavourite(state, action) {
            const newItem = action.payload;

            // Debugging: log the favouritelist
            // console.log("Current favouritelist:", JSON.stringify(state.favouritelist));
            // console.log("New item to add:", newItem);

            const existingItem = state.favouritelist.find((item) => item.articleNo === newItem.articleNo);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.favouritelist.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    price: newItem.price,
                    articleNo: newItem.articleNo,
                    quantity: 1,
                    division: newItem.division,
                    category: newItem.category,
                    imageUrl: newItem.imageUrl,
                    totalPrice: newItem.price,
                    name: newItem.productname,
                });
                state.totalQuantity++;
            }
        },
        removeFromFavourite(state, action) {
            const articleNo = action.payload;
            const existingItem = state.favouritelist.find((item) => item.articleNo === articleNo);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.favouritelist = state.favouritelist.filter((item) => item.articleNo !== articleNo);
                    state.totalQuantity--;
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }
            }
        },
        setShowFavourite(state) {
            state.showFavourite = !state.showFavourite;
        }
    }
});

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice.reducer;
