import axios from 'axios';
import {CATEGORIES_SUCCESS, CATEGORIES_ERROR} from '../action-types';

export const getCategories = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(
                "http://localhost:3333/categories/all"
            );
            dispatch({ type: CATEGORIES_SUCCESS, payload: response.data });
        } catch(error) {
            dispatch({ type: CATEGORIES_ERROR, payload: error.message });
        }
    }
};
