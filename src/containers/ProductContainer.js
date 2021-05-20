import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import Products from "../components/contents/Products";
import ProductItem from "../components/contents/ProductItem";
import { addToCart, actChangeMessage } from "../actions/index";

class ProductContainer extends Component {
    render() {
        var {products} = this.props;

        return (
            <Products>
                { this.showProduct(products) }
            </Products>
        )
    };

    showProduct = (products) => {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0){
            result = products.map((product, index) => {
                return <ProductItem key={ index }
                                    product = { product }
                                    onAddToCart = { onAddToCart }
                                    onChangeMessage = { onChangeMessage }
                />
            })
        }
        return result;
    }
}

ProductContainer.propType = {
    products : PropType.arrayOf(
        PropType.shape({
            id : PropType.number.isRequired,
            name : PropType.string.isRequired,
            image : PropType.string.isRequired,
            description : PropType.string.isRequired,
            price : PropType.number.isRequired,
            inventory : PropType.number.isRequired,
            rating : PropType.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropType.func.isRequired,
    onChangeMessage : PropType.func.isRequired // check nhu 1 function
};

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(addToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);