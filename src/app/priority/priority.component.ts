import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() id: string = '';
  @Input() name?: string = '';
  @Input() age?: number = 0;
  @Input() avatar?: string = '';
  @Input() role?: string = '';
  @Input() created_at?: string = '';
  @Input() status?: string = '';

  updateForm(): void {
    
    const priority: PriorityInterface = {
      id: '1',
      name: "Johnny",
      avatar: 'https://i.pravatar.cc/100',
      role: 'Owner',
      created_at: '2022-04-15',
      age: 40,
      status: 'Offline'
    };
  
    this.store.dispatch(PrioritiesActions.updatePriority({ priority }));
  }

  deletePriority(id: string): void {  
    this.store.dispatch(PrioritiesActions.deletePriority({ id: id}));
  }

}
