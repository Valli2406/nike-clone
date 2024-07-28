import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;

            // Debugging: log the itemsList
            // console.log("Current itemsList:", JSON.stringify(state.itemsList));
            // console.log("New item to add:", newItem);

           // Find if the item already exists in the cart
           const existingItem = state.itemsList.find((item) => item.articleNo === newItem.articleNo);


            // existing item
            // const existingItem = state.itemsList.find((item) => item.imageUrl !== newItem.imageUrl );
            // const existingItem = state.itemsList.find((item) => {
            //     if (item.articleNo !== newItem.articleNo) {
            //         // console.log('item articleno', item.articleNo);
            //         // console.log('itemurl',item.imageUrl);
            //         // console.log('newitem articleNo',newItem.articleNo);
            //         // console.log('newitem url',newItem.productname);

            //         // console.log(newItem); // Assuming the correct property is productName
            //         console.log(item);
            //         return true;
            //     }
            //     return false;
            // });

            if (existingItem) {
                existingItem.quantity++;
                existingItem.price += newItem.price;
                console.log('added existing item');
                
            }
            else {
                state.itemsList.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    price: newItem.price,
                    articleNo:newItem.articleNo,
                    quantity: 1,
                    division:newItem.division,
                    category:newItem.category,
                    imageUrl : newItem.imageUrl,
                    totalPrice: newItem.price,
                    name: newItem.productname,
                })
            }



        },
        removeFromCart(state,action) { 
            const articleNo = action.payload;
            const existingItem = state.itemsList.find((item) => item.articleNo === articleNo);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.itemsList = state.itemsList.filter((item) => item.articleNo !== articleNo);
                    state.totalQuantity--;
                } else {
                    existingItem.quantity--;
                    existingItem.price -= existingItem.totalPrice;
                }
            }
        },
        setShowCart(state) {
            state.showCart = true;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;


