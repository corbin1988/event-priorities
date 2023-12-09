import { Component } from '@angular/core';
import { AppState } from '../types/appState.interface';
import { Store } from '@ngrx/store';
import { closeModal } from '../priorities/store/actions';
import { Observable } from 'rxjs';
import { PriorityInterface } from '../priorities/types/priority.interface';
import * as PrioritiesActions from '../priorities/store/actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  tab$: Observable<string>;
  name$: Observable<string>;
  avatar$: Observable<string | undefined>;
  role$: Observable<string | undefined>;
  created_at$: Observable<string | undefined>;
  age$: Observable<number | undefined | null>;
  status$: Observable<string | undefined>;

  newName: string = '';
  newAvatar: string = 'https://flowbite.com/docs/images/people/profile-picture-5.jpg';
  newRole: string = '';
  newCreatedAt: string = 'Dec 15, 2023';
  newAge: number = 0;
  newStatus: string = 'active';


  constructor(private store: Store<AppState>) {

    this.name$ = this.store.select(state => state.priorities.name);
    this.avatar$ = this.store.select(state =>  state.priorities.avatar);
    this.role$ = this.store.select(state =>  state.priorities.role);
    this.created_at$ = this.store.select(state =>  state.priorities.created_at);
    this.age$ = this.store.select(state =>  state.priorities.age);
    this.status$ = this.store.select(state =>  state.priorities.status);
    this.tab$ = this.store.select(state =>  state.priorities.tab);
  }

  setStatus(status: string): void {
    this.newStatus = status;
  }

  submitForm(): void {
    const randomNumber: number = Math.floor(Math.random() * 10000);

    const randomNumberAsString: string = randomNumber.toString();

    const priority: PriorityInterface = {
      id: randomNumberAsString,
      name: this.newName,
      avatar: this.newAvatar,
      role: this.newRole,
      created_at: this.newCreatedAt,
      age: this.newAge,
      status: this.newStatus
    };
  
    this.store.dispatch(PrioritiesActions.submitPriority({ priority }));

    this.closeModal();
  }

  closeModal() {
    this.store.dispatch(closeModal());
  }
}
