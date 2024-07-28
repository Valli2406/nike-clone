import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectExtractedUsername = (state) => {
    const user = state.auth.user;
    if (user && user.email) {
        const email = user.email;
        const atIndex = email.indexOf('@');
        if (atIndex !== -1) {
            return email.slice(0, atIndex);
        }
    }
    return null;
};

export default authSlice.reducer;
