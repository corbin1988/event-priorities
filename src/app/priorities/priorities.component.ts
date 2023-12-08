import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { EffectsModule } from '@ngrx/effects';


import { PriorityInterface } from './types/priority.interface';
import { openModal, closeModal, changeTab, submitPriority } from './store/actions';

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

export interface AppState {
  priorities: PrioritiesState;
}

@Component({
  selector: 'app-priorities',
  // imports: [FormsModule],
  templateUrl: './priorities.component.html',
  styleUrl: './priorities.component.css'
})
export class PrioritiesComponent {
  // private store = inject(Store);

  priorities$?: Observable<PriorityInterface[]>;

  isModalOpen$?: Observable<boolean>;
  name$: Observable<string>;
  avatar$: Observable<string | undefined>;
  role$: Observable<string | undefined>;
  created_at$: Observable<string | undefined>;
  age$: Observable<number | undefined | null>;
  status$: Observable<string | undefined>;
  tab$: Observable<string>; 


  newName: string = '';
  newAvatar: string = '';
  newRole: string = '';
  newCreatedAt: string = '';
  newAge: number = 0;
  newStatus: string = 'active';

  constructor(private store: Store<AppState>) {
    this.priorities$ = this.store.select(state => state.priorities.priorities); 

    this.isModalOpen$ = this.store.select(state => state.priorities.isModalOpen);
    this.name$ = this.store.select(state => state.priorities.name);
    this.avatar$ = this.store.select(state =>  state.priorities.avatar);
    this.role$ = this.store.select(state =>  state.priorities.role);
    this.created_at$ = this.store.select(state =>  state.priorities.created_at);
    this.age$ = this.store.select(state =>  state.priorities.age);
    this.status$ = this.store.select(state =>  state.priorities.status);
    this.tab$ = this.store.select(state =>  state.priorities.tab);
  }

  // ngOnInit(): void {
  //   this.store.dispatch(PrioritiesActions.getPriorities());
  //   console.log(this.priorities$)
  // }

  openModal() {
    this.store.dispatch(openModal());
    console.log(this.isModalOpen$)
  }

  closeModal() {
    this.store.dispatch(closeModal());
  }

  changeTab(newValue: string) {
    this.store.dispatch(changeTab({ newTab: newValue }));
  }
  // onNameChange(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   if (target) {
  //     const newValue = target.value;
  //     this.store.dispatch(changeName({ newName: newValue }));
  //   }
  // }

  submitForm(): void {
    this.store.dispatch(
      submitPriority({ name: this.newName, avatar: this.newAvatar, role: this.newRole, created_at: this.newCreatedAt, age: this.newAge, status: this.newStatus })
    );
  }
}
