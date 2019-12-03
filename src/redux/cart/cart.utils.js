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