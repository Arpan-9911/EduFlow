const initialState = {
  data: JSON.parse(localStorage.getItem("EduFlowProfile")) || {
    user: null,
    token: null
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('EduFlowProfile', JSON.stringify({...action?.data}))
      return { ...state, data: action?.data }
    case 'LOGOUT':
      localStorage.removeItem('EduFlowProfile')
      return { ...state, data: { user: null, token: null } }
    default:
      return state
  }
}

export default userReducer