import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    PreviewContainer,
    TitleContainer,
    Preview
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, match, history, routeName}) => (
    <PreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
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

export default withRouter(CollectionPreview);