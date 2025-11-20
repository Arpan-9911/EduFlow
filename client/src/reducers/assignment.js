const assignmentReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_ASSIGNMENTS':
      return action.payload
    default:
      return state
  }
}

export default assignmentReducer;
