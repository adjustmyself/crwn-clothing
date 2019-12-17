import React from 'react';

import { CartItemContainer, CartImageContainer, CartDetail, TextContainer} from './cart-item.styles';

const CartItem = ({ item:{imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartImageContainer src={imageUrl} alt='item' />
        <CartDetail>
            <TextContainer>{name}</TextContainer>
            <TextContainer>
                {quantity} x ${price}
            </TextContainer>
        </CartDetail>
    </CartItemContainer>
);

export default CartItem;