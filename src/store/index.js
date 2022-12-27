import {createStore, combineReducers} from 'redux';

export const increment = () => {
  return {
    type: 'COUNT_INCRESE',
  };
};

export const decrement = () => {
  return {
    type: 'COUNT_DECRESE',
  };
};

const initialState = {
  count: 0,
};

export const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_INCRESE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_DECRESE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const testCombineReducers = {
  count: CountReducer,
};

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = createStore(rootReducer);
