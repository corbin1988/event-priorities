import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/appState.interface';

export const selectFeature = (state: AppState) => state.priorities;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const prioritiesSelector = createSelector(
  selectFeature,
  (state) => state.priorities
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);