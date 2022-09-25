import {createStore , combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import { composeWithDevTools} from "redux-devtools-extension";
import { biddedproductReducer, deleteProductReducer, newProductReducer, productDetailsReducer, productReducer, sellerproductReducer } from "./reducers/productReducer";
import { authReducer } from "./reducers/authReducer";

const reducer = combineReducers({
products:productReducer,
productDetails:productDetailsReducer,
newProduct:newProductReducer,
myproducts:biddedproductReducer,
sellerproducts:sellerproductReducer,
deleteProduct: deleteProductReducer,
auth: authReducer
});

let initialState={};

const middleware = [thunk, logger];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;