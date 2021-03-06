import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import { OverviewContainer } from './collection-overview.styles';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({collections}) => (
    <OverviewContainer>
        {
            collections.map(({id,...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </OverviewContainer>    
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);