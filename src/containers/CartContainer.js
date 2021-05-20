import React, { Component } from "react";
import CartItem from "./../components/contents/CartItem";
import CartResult from "./../components/contents/CartResult";
import Cart from "../components/contents/Cart";
import * as messages from "./../constants/Message";
import PropType from "prop-types";
import { connect } from "react-redux";
import * as actions from "./../actions/index";


class CartContainer extends Component {
    render() {
        var { cart } = this.props;

        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        )
    }

    showCartItem = (cart) => {
        var { onDileteItem, onChangeMessage, onUpdateItem } = this.props;
        var result = <tr><td colSpan="6">{ messages.MSG_CART_EMTY }</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key = { index }
                              index = { index }
                              item = { item }
                              onDileteItem = { onDileteItem }
                              onChangeMessage = { onChangeMessage }
                              onUpdateItem = { onUpdateItem }
                    />
                )
            });
        }
        return result;
    };

    showTotalAmount = (cart) => {
        var result = null;
        var { onDileteItem } = this.props;
        if (cart.length > 0){
            result = <CartResult cart = { cart } />
        }
        return result;
    }
}

CartContainer.propType = {
    cart : PropType.arrayOf(PropType.shape({
            product : PropType.shape({
                id : PropType.number.isRequired,
                name : PropType.string.isRequired,
                image : PropType.string.isRequired,
                description : PropType.string.isRequired,
                price : PropType.number.isRequired,
                inventory : PropType.number.isRequired,
                rating : PropType.number.isRequired
            }).isRequired,
            quantity : PropType.number.isRequired
        })).isRequired,
    onDileteItem : PropType.func.isRequired,
    onChangeMessage : PropType.func.isRequired,
    onUpdateItem : PropType.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDileteItem : (product) => {
            dispatch(actions.actRemoveProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateItem : (product, quantity) => {
            dispatch(actions.acUpdateProductInCart(product, quantity));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);