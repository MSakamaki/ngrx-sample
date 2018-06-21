import { Action } from '@ngrx/store';
import { MainActionTypes, MainActions } from './main.actions';


export interface State {
  scool: any[];
}

export const initialState: State = {
  scool: [],
};

export function reducer(state = initialState, action: MainActions): State {
  console.log('xxxx');
  switch (action.type) {
    case MainActionTypes.LoadedMains: {
      return {
        ...state,
        scool: action.payload.data,
      };
    }
    default:
      return state;
  }
}
