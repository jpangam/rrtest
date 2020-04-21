function nameReducer(state = {name: ''}, action) {
  switch (action.type) {
    case 'SAVE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
  //return state;
}

export default nameReducer;
