import React from 'react';
import { connect } from 'react-redux';
import { AddItems } from '../../redux/cart/cart-action';
import SubmitButton from '../FormInput/submit_component';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl1} = item;
  return (<div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl1})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <SubmitButton onClick={() => addItem(item)} inverted >Add to cart</SubmitButton>
  </div>
)
    }

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(AddItems(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
