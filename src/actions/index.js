import * as Types from "./../constants/ActionType"; // import action.type

export const addToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product : product,
        quantity : quantity
    }
};

export const actChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message : message
    }
};

export const actRemoveProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product : product
    }
};

export const acUpdateProductInCart = (product, quantity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product : product,
        quantity : quantity
    }
};