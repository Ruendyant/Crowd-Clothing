import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CollectionDataSelector, SelectionCollection } from '../../redux/collection/collection-selector';
import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview_styles.scss'

const CollectionOverview = ({collections}) => (
  <div className="collection-overview">
    {
      collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id} {...otherProps}/>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections : SelectionCollection
})

export default connect(mapStateToProps)(CollectionOverview);