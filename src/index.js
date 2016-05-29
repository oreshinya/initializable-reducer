const INIT = 'INITIALIZABLE_RECUDER.INIT';

export const initializeReducers = () => {
  return { type: INIT };
};

export const enableInitializing = (reducer) => {
  return (prevState, action) => {
    const prev = action.type === INIT ? undefined : prevState;
    return reducer(prev, action);
  };
};
