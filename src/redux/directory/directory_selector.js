import { createSelector } from "reselect";

const directorys = state => state.directory;

export const SelectDirectorySection = createSelector(
  [directorys],
  directorya => directorya.sections
)