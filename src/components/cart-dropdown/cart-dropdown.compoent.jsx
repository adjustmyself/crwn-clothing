import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { Dropdown, CartItemsContainer, EmpyMessage} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <Dropdown>
        <CartItemsContainer>
            {
                cartItems.length ? 
                (cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                )):
                (<EmpyMessage>Your cart is empty</EmpyMessage>)
            }
        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }
        }>GO TO CHECKOUT
        </CustomButton>
    </Dropdown>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));