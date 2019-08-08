import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors.js';
import './collection.styles.scss';

const CollectionPage = ( {collection} ) => {
  console.log('this is collection: ', collection);
  return (
    <div className='collection-page'>
      <h2>CATEGORY PAGE</h2>
    </div>
  )
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// })

const mapStateToProps = (state, ownProps) => (
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId)
  })
);

export default connect(mapStateToProps)(CollectionPage);