import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PrioritiesModule } from './priorities/priorities.module';
import { PriorityComponent } from './priority/priority.component';
import { ModalComponent } from './modal/modal.component';
import { ModalSidebarComponent } from './modal-sidebar/modal-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    // PriorityComponent,
    // PrioritiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    PrioritiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
