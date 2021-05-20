import { combineReducers } from "redux";
import products from "./Product";
import cart from "./Cart";
import message from "./Message";

const appReducer = combineReducers({
    products : products,
    cart : cart,
    message : message
});

export default appReducer;