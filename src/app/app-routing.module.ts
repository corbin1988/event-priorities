import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrioritiesComponent } from './priorities/priorities.component';

const routes: Routes = [
  { path: 'priority', component: PrioritiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
