import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionOverviewContainer =  compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;