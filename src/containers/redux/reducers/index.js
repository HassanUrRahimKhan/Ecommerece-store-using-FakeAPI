import { combineReducers } from "redux";

import { ProductReducer, selectedProductReducer, AddtoCartReducer} from "./ProductReducer";

const reducers = combineReducers({
     allProducts: ProductReducer,
     product:selectedProductReducer,
     AddtoCart:AddtoCartReducer,
     

})

export default reducers;