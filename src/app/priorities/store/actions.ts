import { createAction, props } from '@ngrx/store';
import { PriorityInterface } from '../types/priority.interface';


export const openModal = createAction('[Priorities] Open Modal');
export const closeModal = createAction('[Priorities] Close Modal');
export const changeName = createAction(
  '[Priorities] Change Name',
  props<{ newName: string }>()
);

export const changeTab = createAction(
  '[Priorities] Change Tab',
  props<{ newTab: string }>()
);

export const submitPriority = createAction(
  '[Priorities] Submit Priority',
  props<{ priority: PriorityInterface }>()
);

export const updatePriority = createAction(
  '[Priorities] Update Priority',
  props<{ priority: PriorityInterface }>()
);

export const deletePriority = createAction(
  '[Priorities] Delete Priority',
  props<{ id: string }>()
);


export const getPriorities = createAction('[Priorities] Get Priorities');

export const getPrioritiesSuccess = createAction(
  '[Priorities] Get Priorities success',
  props<{ priorities: PriorityInterface[] }>()
);
export const getPrioritiesFailure = createAction(
  '[Priorities] Get Priorities failure',
  props<{ error: string }>()
);