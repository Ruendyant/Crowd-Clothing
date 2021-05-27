import { createSelector } from "reselect";

const collectionSelector = state => state.collection;

export const CollectionDataSelector = createSelector(
  [collectionSelector],
  clc => clc.collections
)

export const SelectionCollection = createSelector(
  [CollectionDataSelector],
  coll => Object.keys(coll).map(collitems => coll[collitems])
)

export const CollectionIDSelector = collectionurl => createSelector(
  [CollectionDataSelector],
  coll => coll[collectionurl]
)