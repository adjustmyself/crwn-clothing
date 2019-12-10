import React from 'react';
import { connect } from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import { IconContainer, IconImage, IconCount} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <IconContainer onClick={toggleCartHidden}>
        <IconImage />
        <IconCount>{itemCount}</IconCount>
    </IconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);