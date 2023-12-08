import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrioritiesComponent } from './priorities.component';
import { EffectsModule } from '@ngrx/effects';
import { PrioritiesEffects } from './store/effects';
import { PrioritiesService } from './priorities.service';
import { PriorityComponent } from '../priority/priority.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalSidebarComponent } from '../modal-sidebar/modal-sidebar.component';



@NgModule({
  declarations: [PrioritiesComponent, PriorityComponent, ModalComponent,  ModalSidebarComponent],
  imports: [CommonModule, FormsModule, EffectsModule.forFeature([PrioritiesEffects])],
  providers: [
    PrioritiesService
  ],
})
export class PrioritiesModule { }
