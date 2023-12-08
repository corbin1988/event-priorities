import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { PrioritiesEffects } from '../priorities/store/effects';
import { AppState } from '../types/appState.interface';
import { Store } from '@ngrx/store';
import { PriorityInterface } from '../priorities/types/priority.interface';
import * as PrioritiesActions from '../priorities/store/actions';
@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrl: './priority.component.css'
})
export class PriorityComponent {

  constructor(private store: Store<AppState>) {}

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

}
