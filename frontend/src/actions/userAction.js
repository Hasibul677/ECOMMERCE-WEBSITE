import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  CLEAR_ERROR,
} from "../constants/userConstant";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  credentials: "include",
};

// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

//REGISTER
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/register`,
      userData,
      config
    );

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//LOAD USER
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/api/v1/me`, {
      withCredentials: true,
      credentials: "include",
    });

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//LOGOUT USER
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`http://localhost:4000/api/v1/logout`, {
      withCredentials: true,
      credentials: "include",
    });

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//UPDATE PROFILE
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/me/update`,
      userData,
      config
    );

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//UPDATE PASSWORD
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//FORGOT PASSWORD
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const { data } = await axios.post(
      `http://localhost:4000/api/v1/password/forgot`,
      email,
      config
    );

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//RESER PASSWORD
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
