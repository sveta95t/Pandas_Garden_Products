import axios from 'axios';
import { PRODUCTS_SUCCESS, PRODUCTS_ERROR } from '../action-types';

export const getProducts = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:3333/products/all"
            );
            dispatch({ type: PRODUCTS_SUCCESS, payload: response.data });
        } catch(error) {
            dispatch({ type: PRODUCTS_ERROR, payload: error.message });
        }
    }
};
