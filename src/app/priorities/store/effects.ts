import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

import * as PrioritiesActions from './actions';
import { PrioritiesService } from '../priorities.service';

@Injectable()
export class PrioritiesEffects {
  
  getPriorities$ = createEffect(() => 
    this.actions$.pipe(
      ofType(PrioritiesActions.getPriorities),
      tap(() => console.log('Before mergeMap')),
      mergeMap(() => {
        console.log('CHECK'); // Add the console.log here
        return this.prioritiesService.getPriorities().pipe(
          map((priorities) => PrioritiesActions.getPrioritiesSuccess({ priorities })),
          catchError((error) =>
            of(PrioritiesActions.getPrioritiesFailure({ error: error.message }))
          )
        );
      })
    )
  );

  addPriority$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PrioritiesActions.submitPriority), // Replace with your action type
      mergeMap((action) =>
        this.prioritiesService.addPriority(action.priority).pipe(
          map(() => PrioritiesActions.getPriorities()), // Dispatch action to get updated priorities
          catchError((error) =>
            of(PrioritiesActions.getPrioritiesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  updatePriority$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PrioritiesActions.updatePriority),
      mergeMap(({ priority }) =>
        this.prioritiesService.updatePriority(priority).pipe(
          map(() => PrioritiesActions.getPriorities()), // Dispatch success action if needed
          catchError((error) =>
            of(PrioritiesActions.getPrioritiesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  deletePriority$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PrioritiesActions.deletePriority),
      mergeMap(({ id }) =>
        this.prioritiesService.deletePriority(id).pipe(
          map(() => PrioritiesActions.getPriorities()), // Dispatch success action if needed
          catchError((error) =>
            of(PrioritiesActions.getPrioritiesFailure({ error: error.message }))
          )
        )
      )
    )
  );


  constructor(private actions$: Actions, private prioritiesService: PrioritiesService) {
    console.log('CONSTRUCT')
  }
}
