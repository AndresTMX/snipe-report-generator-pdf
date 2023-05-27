const initialStore = ({ initialValue }) => ({
  error: false,
  loading: initialValue,
  storage: initialValue,
})

const reducer = (state, action) => {
  if (reducerStore(state)[action.type]) {
    return reducerStore(state, action.payload)[action.type];
  } else {
    return state;
  }
};

const actionTypes = {
  updateStorage: 'UPDATE_STORAGE',
  setLoading: 'LOADING',
  setError: 'ERROR',
  setStateStorage: 'SET_STATE_STORAGE',
  setDateDay: 'SET_DATE_DAY'
};

const reducerStore = (state, payload) => ({

  [actionTypes.updateStorage]: {
    ...state,
    storage: payload
  },
  [actionTypes.setLoading]: {
    ...state,
    loading: payload
  },
  [actionTypes.setError]: {
    ...state,
    error: payload
  },

});

export { initialStore, reducer, actionTypes };
