import { createReducer, on } from '@ngrx/store';
import { openModal, closeModal, changeName, submitPriority, changeTab } from './actions';
import { PriorityInterface } from '../types/priority.interface';


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
  status: "active"
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

  on(submitPriority, (state, action) => ({
    ...state,
    name: action.name,
    avatar: action.avatar,
    role: action.role,
    created_at: action.created_at,
    age: action.age,
    status: action.status,
  })),

  on(changeTab, (state, { newTab }) => ({ ...state, tab: newTab })),
);