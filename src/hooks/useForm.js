import { useReducer } from 'react';

const ACTIONS = {
  CHANGE_KEYWORD: 'change_keyword',
  CHANGE_RATING: 'change_rating',
  CHANGE_TYPE: 'change_type',
};

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
    ...state,
    times: state.times + 1,
    keyword: action.payload,
  }),
  [ACTIONS.CHANGE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
  [ACTIONS.CHANGE_TYPE]: (state, action) => ({
    ...state,
    type: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm({
  initialKeyword = '',
  initialRating = 'g',
  initialType = 'gifs',
} = {}) {
  const [{ keyword, rating, type }, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    type: initialType,
  });

  return {
    changeKeyword: ({ keyword }) =>
      dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    changeRating: ({ rating }) =>
      dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating }),
    changeType: ({ type }) =>
      dispatch({ type: ACTIONS.CHANGE_TYPE, payload: type }),
    keyword,
    rating,
    type,
  };
}
