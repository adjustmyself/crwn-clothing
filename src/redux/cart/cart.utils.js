export const addItemToCart = (cardItems, cartItemToAdd) => {
    const existingCartItem = cardItems.find(
        cardItem => cardItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cardItems.map(cardItem =>
            cardItem.id === cartItemToAdd.id ?
            {...cardItem, quantity:cardItem.quantity + 1}
            : cardItem
        );
    }

    return [...cardItems, {...cartItemToAdd, quantity:1}]
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToRemove.id
    )
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id
        );
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem,quantity:cartItem.quantity - 1} :
        cartItem
        );
}