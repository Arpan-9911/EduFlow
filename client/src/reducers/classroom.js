const classroomReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_CLASSROOMS':
      return action.payload
    default:
      return state
  }
}

export default classroomReducer;
