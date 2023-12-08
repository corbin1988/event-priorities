import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { prioritiesReducer } from '../priorities/store/reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  priorities: prioritiesReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
