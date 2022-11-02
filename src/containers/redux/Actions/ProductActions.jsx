import { ActionTypes } from "../Contents/Action-types";

import FakeStoreApi from "../../../apis/FakeStoreApi";



// export const fetchProducts = async (dispatch) => {

  

//     const response = await axios.get("https://fakestoreapi.com/products")
//     console.log(response.data)
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: response
//     }
// }
export const   fetchProducts =  () =>  async (dispatch) => {
        const response = await FakeStoreApi.get("/products")
        dispatch({
            type:ActionTypes.FETCH_PRODUCTS,
            payload:response.data
        })

}
export const   fetchProduct =  (id) =>  async (dispatch) => {
        const response = await FakeStoreApi.get(`/products/${id}`)
        dispatch({
            type:ActionTypes.SELECTED_PRODUCT,
            payload:response.data
        })

}

export const AddtoCartAction=(product)=>{
    return (dispatch) =>{
       dispatch({
            type:ActionTypes.ADD_TO_CART,
            payload:product,
       })
    }
}



// Below acion is synchoronous Action Creator
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
export const removeSelectedProduct = (product) => {
    // console.log(product)
    return (dispatch)=>{
            dispatch({
                type: ActionTypes.REMOVE_TO_CART,
                payload: product,
        
            })
      }
    
}

