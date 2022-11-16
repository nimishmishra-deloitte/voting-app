import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  POLLS_INFO_REQUEST,
  POLLS_INFO_SUCCESS,
  POLLS_INFO_FAIL,
  ELECTION_INFO_REQUEST,
  ELECTION_INFO_SUCCESS,
  ELECTION_INFO_FAIL,
  SESSION_INFO_REQUEST,
  SESSION_INFO_SUCCESS,
  SESSION_INFO_RESET,
  SESSION_INFO_FAIL,
  CHANGE_YEAR,
} from "../constant/userConst";
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {},
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/login/",
      { username: username, password: password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
export const electionsInfo = (sessionid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ELECTION_INFO_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
      params: {
        session_id: sessionid,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/election/",
      config
    );

    dispatch({
      type: ELECTION_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ELECTION_INFO_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const pollsInfo = (sessionid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLLS_INFO_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
      params: {
        session_id: sessionid,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/election/poll-info/",
      config
    );

    dispatch({
      type: POLLS_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POLLS_INFO_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const sessionInfo = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SESSION_INFO_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userInfo.access_token}`,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/session/",
      config
    );

    dispatch({
      type: SESSION_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SESSION_INFO_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

//
// export const onChangeAction = (uid) => {
//   return {
//     type: CHANGE_YEAR,
//     uid,
//   };
// };
