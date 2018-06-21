import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromMain from '../main.reducer';

export interface CoreState {

  main: fromMain.State;
}

export const reducers: ActionReducerMap<CoreState> = {

  main: fromMain.reducer,
};


export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [] : [];
