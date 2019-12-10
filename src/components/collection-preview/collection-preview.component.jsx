import React from 'react';

import {
    PreviewContainer,
    TitleContainer,
    Preview
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items}) => (
    <PreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <Preview className='preview'>
            {
                items.filter((item, idx) => idx <4 )
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </Preview>
    </PreviewContainer>
);

export default CollectionPreview;