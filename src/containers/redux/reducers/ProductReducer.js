import { ActionTypes } from "../Contents/Action-types";
import { removeSelectedProduct } from './../Actions/ProductActions';

const INTIALSTATE = {
    products: [],
    CartItem: [],
    quantity: 0,
};

const ProductReducer = (state = INTIALSTATE, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTS:

            return { ...state, products: payload };

        default:
            return { ...state };

    }
}

const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:

            return { ...state, ...payload }

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}


        default:
            return { ...state };
    }
}


const AddtoCartReducer = (state = INTIALSTATE, { type, payload }) => {
    // state.quantity += 1;
   
    switch (type) {
        case ActionTypes.ADD_TO_CART:
           // console.log(payload.product.id)
            return {
                ...state,
                quantity: state.quantity += 1,
                CartItem: [...state.CartItem, payload]
            }

            case ActionTypes.REMOVE_TO_CART:
                // // console.log(state.CartItem)
                // console.log(payload)
                // console.log(state.CartItem)
                //const product = state.CartItem.map((item)=>item.product.id)
                 const product = state.CartItem.filter((p) =>   p.product.id !== payload);
                 console.log(product)
                return {
                  ...state,
                  quantity: state.quantity -= 1,
                  CartItem: [...product],
                };

        default:
            return state;
    }

}



export { ProductReducer, selectedProductReducer, AddtoCartReducer };
