import { Action } from '@ngrx/store';

export enum MainActionTypes {
  LoadMains = '[Main] Load Mains',
  LoadedMains = '[Main] Loaded Mains',
  FailMains = '[Main] Fail Load Mains'
}

export class LoadMains implements Action {
  readonly type = MainActionTypes.LoadMains;
  constructor() { }
}

export class LoadedMains implements Action {
  readonly type = MainActionTypes.LoadedMains;
  constructor(public payload: { data: any  }) {}
}

export type MainActions = LoadMains | LoadedMains;
