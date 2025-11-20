const announcementReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_ANNOUNCEMENTS':
      return action.payload
    default:
      return state
  }
}

export default announcementReducer;
