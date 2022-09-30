import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      console.log(products);
      return products;
    },
  },
});

export const getProductsThunk = () => dispatch => {
  dispatch(setIsLoading(true));
  axios
    .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;