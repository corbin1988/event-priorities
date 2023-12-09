import { Component } from '@angular/core';
import { AppState } from '../types/appState.interface';
import { Store } from '@ngrx/store';
import { closeModal } from '../priorities/store/actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(private store: Store<AppState>) {
      
  }
  closeModal() {
    this.store.dispatch(closeModal());
  }
}
