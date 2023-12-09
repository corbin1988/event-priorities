import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PrioritiesActions from './store/actions';
import { PriorityInterface } from './types/priority.interface';
import { openModal, closeModal, changeTab, submitPriority } from './store/actions';
import { AppState } from '../types/appState.interface';


@Component({
  selector: 'app-priorities',
  // imports: [FormsModule],
  templateUrl: './priorities.component.html',
  styleUrl: './priorities.component.css',
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
  isLoading$: Observable<boolean> 


  newName: string = '';
  newAvatar: string = '';
  newRole: string = '';
  newCreatedAt: string = '';
  newAge: number = 0;
  newStatus: string = 'active';

  constructor(private store: Store<AppState>) {
    this.priorities$ = this.store.select(state => state.priorities.priorities); 
    this.isLoading$ = this.store.select(state => state.priorities.isLoading);

    this.isModalOpen$ = this.store.select(state => state.priorities.isModalOpen);
    this.name$ = this.store.select(state => state.priorities.name);
    this.avatar$ = this.store.select(state =>  state.priorities.avatar);
    this.role$ = this.store.select(state =>  state.priorities.role);
    this.created_at$ = this.store.select(state =>  state.priorities.created_at);
    this.age$ = this.store.select(state =>  state.priorities.age);
    this.status$ = this.store.select(state =>  state.priorities.status);
    this.tab$ = this.store.select(state =>  state.priorities.tab);
  }

  ngOnInit(): void {
    this.store.dispatch(PrioritiesActions.getPriorities());
  }

  openModal() {
    this.store.dispatch(openModal());
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
  }

  updateForm(): void {
    
    const priority: PriorityInterface = {
      id: '1',
      name: "Johnny",
      avatar: 'johnny_avatar.jpg',
      role: 'Owner',
      created_at: '2022-04-15',
      age: 40,
      status: 'Offline'
    };
  
    this.store.dispatch(PrioritiesActions.updatePriority({ priority }));
  }

  deletePriority(): void {  
    this.store.dispatch(PrioritiesActions.deletePriority({ id: '3'}));
  }
}
