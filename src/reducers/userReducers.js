import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constant/userConst";
import {
  POLLS_INFO_REQUEST,
  POLLS_INFO_SUCCESS,
  POLLS_INFO_FAIL,
  POLLS_INFO_RESET,
  ELECTION_INFO_REQUEST,
  ELECTION_INFO_SUCCESS,
  ELECTION_INFO_FAIL,
  ELECTION_INFO_RESET,
  SESSION_INFO_REQUEST,
  SESSION_INFO_SUCCESS,
  SESSION_INFO_FAIL,
  SESSION_INFO_RESET,
  ON_CHANGE_REQUEST,
  ON_CHANGE_FAIL,
  ON_CHANGE_SUCCESS,
  ON_CHANGE_RESET,
} from "../constant/userConst";
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: true, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: true, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const PollsInfoReducer = (state = { pollType: {} }, action) => {
  switch (action.type) {
    case POLLS_INFO_REQUEST:
      return { ...state, loading: true };

    case POLLS_INFO_SUCCESS:
      return { loading: false, pollType: action.payload };

    case POLLS_INFO_FAIL:
      return { loading: false, error: action.payload };

    case POLLS_INFO_RESET:
      return { pollType: {} };
    default:
      return state;
  }
};
export const ElectionInfoReducer = (state = { election: [{}] }, action) => {
  switch (action.type) {
    case ELECTION_INFO_REQUEST:
      return { ...state, loading: true };

    case ELECTION_INFO_SUCCESS:
      return { loading: false, election: action.payload };

    case ELECTION_INFO_FAIL:
      return { loading: false, error: action.payload };

    case ELECTION_INFO_RESET:
      return { election: [{}] };
    default:
      return state;
  }
};

export const SessionInfoReducer = (state = { session: [{}] }, action) => {
  switch (action.type) {
    case SESSION_INFO_REQUEST:
      return { ...state, loading: true };

    case SESSION_INFO_SUCCESS:
      return { loading: false, session: action.payload };

    case SESSION_INFO_FAIL:
      return { loading: false, error: action.payload };

    case SESSION_INFO_RESET:
      return { session: [{}] };
    default:
      return state;
  }
};

const initialId = {
  uid: 1,
};
export const onChangeReducer = (state = initialId, action) => {
  return state;
};
