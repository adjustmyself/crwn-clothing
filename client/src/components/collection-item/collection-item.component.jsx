import React from 'react';
import { connect } from 'react-redux';


import { addItem } from '../../redux/cart/cart.actions';


import {
    CollectionItemContainer,
    ImageContainer,
    FooterContainer,
    NameContainer,
    PriceContainer,
    AddButtonContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl={imageUrl} />
        <FooterContainer>
            <NameContainer>{name} </NameContainer>
            <PriceContainer>{price} </PriceContainer>
        </FooterContainer>
        <AddButtonContainer onClick={() => addItem(item)} inverted> Add to cart</AddButtonContainer>
    </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) 
})

export default connect(null, mapDispatchToProps)(CollectionItem);