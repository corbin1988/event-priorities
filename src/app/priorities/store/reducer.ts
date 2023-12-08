import { createReducer, on } from '@ngrx/store';
import { openModal, closeModal, changeName, submitPriority, changeTab } from './actions';
import { PriorityInterface } from '../types/priority.interface';
import * as PrioritiesActions from './actions';


export interface PrioritiesState {
  priorities: PriorityInterface[];
  isModalOpen: boolean;
  name: string;
  slide: number;
  tab: string;
  avatar?: string;
  role?: string;
  created_at?: string;
  age?: number | null;
  status?: string;
  isLoading: boolean;
}

export const initialState: PrioritiesState = {
  priorities: [],
  isModalOpen: false,
  name: "",
  slide: 1,
  tab: "profile",
  avatar: "",
  role: "",
  created_at: "",
  age: null,
  status: "active",
  isLoading: false
}

export const prioritiesReducer = createReducer(
  initialState,
  on(openModal, (state) => {
    return { ...state, isModalOpen: true }; // Return a new state with isModalOpen set to true
  }),
  on(closeModal, (state) => {
    return { ...state, isModalOpen: false }; // Return a new state with isModalOpen set to false
  }),
  on(changeName, (state, { newName }) => ({ ...state, name: newName })),

  on(PrioritiesActions.submitPriority, (state, action) => ({
    ...state,
    priority: action.priority
  })),

  on(PrioritiesActions.updatePriority, (state, action) => ({
    ...state,
    priority: action.priority
  })),

  on(PrioritiesActions.deletePriority, (state, action) => ({
    ...state,
    priority: action.id
  })),

  on(changeTab, (state, { newTab }) => ({ ...state, tab: newTab })),

  on(PrioritiesActions.getPriorities, (state) => {
    console.log(state.isLoading);
    return { ...state, isLoading: true };
  }),
  on(PrioritiesActions.getPrioritiesSuccess, (state, action) => {
    console.warn('Priorities')
    console.log(action.priorities);
    return {
      ...state,
      isLoading: false,
      priorities: action.priorities,
    };
  }),
  on(PrioritiesActions.getPrioritiesFailure, (state, action) => {
    console.log('Reducer: getPrioritiesFailure action dispatched');
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);