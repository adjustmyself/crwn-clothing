import React from 'react';
import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

import {
    CheckoutItem,
    CheckOutImage,
    TextContainer,
    QuantityContainer,
    RemoveButton
} from './checkout-item.styles';

const CheckOutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
    <CheckoutItem>
        <CheckOutImage>
            <img src={imageUrl} alt='item' />
        </CheckOutImage>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItem>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null,mapDispatchToProps)(CheckOutItem);