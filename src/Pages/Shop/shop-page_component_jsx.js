import React from 'react';
import { Route } from 'react-router-dom';
import CategoryPage from '../../Component/Category/category_comp';
import CollectionOverview from '../../Component/Collection-Overview/collection-overview_comp'

const ShopPage = ({match}) => {
  console.log(match.path);
  return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
  )}


export default ShopPage;