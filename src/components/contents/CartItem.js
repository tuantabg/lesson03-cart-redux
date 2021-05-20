import React, { Component } from "react";
import * as message from "./../../constants/Message";

class CartItem extends Component {
    render() {
        var { item } = this.props;
        var { quantity } = item;

        return (
            <tr>
                <td scope="row">
                    <img
                        src={ item.product.image }
                        alt={ item.product.name } className="img-fluid z-depth-0"/>
                </td>
                <td>
                    <h5>
                        <strong>{ item.product.name }</strong>
                    </h5>
                </td>
                <td>{ item.product.price }$</td>
                <td className="center-on-small-only">
                    <span className="qty p-3">{ quantity }</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                               onClick={ () => this.onUpdateQuantity(item.product, item.quantity -1) }
                        >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                               onClick={ () => this.onUpdateQuantity(item.product, item.quantity +1) }
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(item.product.price, item.quantity) }$</td>
                <td>
                    <button type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item"
                            onClick={ () => this.onDileteItem(item.product) }
                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateItem(product, quantity);
            this.props.onChangeMessage(message.MSG_UPDATE_TO_CART_SUCCESS);
        }
    };

    onDileteItem = (product) => {
        this.props.onDileteItem(product);
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    };

    showSubTotal = (price, quantity) => {
        return price * quantity;
    };
}

export default CartItem;