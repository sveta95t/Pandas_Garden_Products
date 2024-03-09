import { PRODUCTS_SUCCESS, PRODUCTS_ERROR } from "../action-types";

const initialState = {
    products: [],
    error: null,
};

const SORT_BY_VALUE = 'SORT_BY_VALUE'

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                error: null,
            };
        case PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SORT_BY_VALUE: 
            if (action.payload === 'price-high-low'){
                return {
                    ...state,
                    products: state.products.slice().sort((a,b) => b.price - a.price )
                }
            } else if (action.payload === 'price-low-high') {
                return {
                    ...state,
                    products: state.products.slice().sort((a,b) => a.price - b.price )
                }
            }
        default:
            return state;
    }
};

export const sortByValueAction = (payload) => ({type: SORT_BY_VALUE, payload})