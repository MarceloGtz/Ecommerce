import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      console.log('Cart: ', action.payload);
      return action.payload;
    },
  },
});

export const getCartThunk = () => dispatch => {
  dispatch(setIsLoading(true));
  return axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
    .then(res => dispatch(setCart(res.data.cart)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
