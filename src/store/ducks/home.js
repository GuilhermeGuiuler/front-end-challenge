import { userDetails } from '../../services/api'

export const Types = {
  FETCH_USER: '@user/FETCH_USER',
  FETCH_USER_SUCCESS: '@user/FETCH_USER_SUCCESS',
  FETCH_USER_ERROR: '@user/FETCH_USER_ERROR'
}

export const Creators = {
  fetchUser: () => ({
    type: Types.FETCH_USER
  }),

  fetchUserSuccess: userDetail => ({
    type: Types.FETCH_USER_SUCCESS,
    payload: {
      userDetail
    }
  }),

  fetchUserError: error => ({
    type: Types.FETCH_USER_ERROR,
    payload: {
      error
    }
  })
}

export function getUser(name) {
  return async dispatch => {
    try {
      dispatch(Creators.fetchUser())
      const response = await userDetails(name)
      const userDetail = response.data
      dispatch(Creators.fetchUserSuccess(userDetail))
    } catch (error) {
      dispatch(Creators.fetchUserError(error.response.data.message))
    }
  }
}

const INITIAL_STATE = {
  error: null,
  loading: true,
  userDetail: {}
}

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_USER:
      return { ...state, ...INITIAL_STATE }
    case Types.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userDetail: action.payload.userDetail
      }
    case Types.FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
