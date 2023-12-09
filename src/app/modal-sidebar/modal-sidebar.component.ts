import { Component } from '@angular/core';
import { AppState } from '../types/appState.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTab } from '../priorities/store/actions';

@Component({
  selector: 'app-modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrl: './modal-sidebar.component.css'
})
export class ModalSidebarComponent {
  
  constructor(private store: Store<AppState>) {}

  changeTab(newValue: string) {
    this.store.dispatch(changeTab({ newTab: newValue }));
  }
}
