import { PRODUCTS_SUCCESS, PRODUCTS_ERROR } from "../action-types";

const initialState = {
    products: [],
    error: null,
};

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
        default:
            return state;
    }
};