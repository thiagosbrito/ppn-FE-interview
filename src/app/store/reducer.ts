import * as fromActions from './actions';

const initialState = {
  name: 'John',
};

export function userReducer(state = initialState, action: fromActions.Actions): any {
  switch (action.type) {
    case fromActions.LOAD_USER:
      return { ...state, name: 'Jane' };
    default:
      return state;
  }
}
