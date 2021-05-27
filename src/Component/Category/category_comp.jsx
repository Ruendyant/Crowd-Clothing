import React from 'react';
import { connect } from 'react-redux';
import { CollectionIDSelector } from '../../redux/collection/collection-selector';
import CollectionItem from '../collection-item/collection-item.component';

import "./category_styles.scss";

const CategoryPage = ({match, collection}) => {
  const {title ,items} = collection;
  return (
  <div className="collection-page">
    <span className="title">{title}</span>
    <div className="items">
    {
      items.map(item => <CollectionItem key={item.id} item={item}/>)
    }
    </div>
  </div>
)}

const mapStateToProps = (state, ownProps) => ({
  collection : CollectionIDSelector(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);