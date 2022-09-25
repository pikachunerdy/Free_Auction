import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from "../constants/authConstants";

const defaultState = {
  loading: false,
  user: null,
  error: "",
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        user: {},
        error: ""
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
