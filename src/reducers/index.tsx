import { EnthusiasmAction } from 'actions';
import { StoreState } from 'types';
import { combineReducers } from 'redux';

import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initeState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

function enthusiasm(state: StoreState = initeState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}

export default combineReducers<StoreState>({
  enthusiasm
});