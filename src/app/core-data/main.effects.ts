import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/internal/Observable';
import { LoadMains, MainActionTypes, LoadedMains } from './main.actions';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ScoolService } from 'backend';
import { of } from 'rxjs';




@Injectable()
export class MainEffects {

  constructor(private actions$: Actions, private scool: ScoolService) {}

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(MainActionTypes.LoadMains),
    mergeMap(action =>
      this.scool.getXxxxxx().pipe(
        tap((data) => {
          console.log('TAP!', data);
        }),
      //   // If successful, dispatch success action with result LoadedMains
        // map(data => ({ type: MainActionTypes.LoadedMains, payload: data })),
        map(data => new LoadedMains({ data: data} )),
      //   // If request fails, dispatch failed action
        catchError(() => of({ type: MainActionTypes.FailMains }))
      )
    )
  );
}
