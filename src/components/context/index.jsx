import React from "react";
import PropTypes from "prop-types";

export const PrimeSender = React.createContext(null);
PrimeSender.displayName = "PrimeSenderContext";

export function reducer(state, action) {
  let newState;

  switch (action.type) {
    case "OPEN_SIDENAV":
      newState = { ...state, openSidenav: action.value };
      break;

    case "SIDENAV_TYPE":
      newState = { ...state, sidenavType: action.value };
      break;

    case "SIDENAV_COLOR":
      newState = { ...state, sidenavColor: action.value };
      break;

    case "TRANSPARENT_NAVBAR":
      newState = { ...state, transparentNavbar: action.value };
      break;

    case "FIXED_NAVBAR":
      newState = { ...state, fixedNavbar: action.value };
      break;

    case "OPEN_CONFIGURATOR":
      newState = { ...state, openConfigurator: action.value };
      break;

    case "SET_PROFILE":
      newState = { ...state, profile: action.value };
      break;

    case "UPDATE_PHONE_AND_ATTEMPTS":
      newState = {
        ...state,
        credentials: {
          ...state.credentials,
          phone: action.payload.phone,
          transfer_attempts: action.payload.transfer_attempts,
        },
      };
      break;

    case "SET_CREDENTIALS":
      newState = { ...state, credentials: action.value };
      break;

    case "CLEAR_CREDENTIALS":
      newState = { ...state, credentials: null };
      break;

    case "RESET_APP_STATE":
      newState = defaultState;
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  // Save new state to localStorage
  localStorage.setItem("appState", JSON.stringify(newState));

  return newState;
}

export function PrimeSenderControllerProvider({ children }) {
  const defaultState = {
    openSidenav: false,
    sidenavColor: "green",
    sidenavType: "white",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    credentials: null,
    profile: 0
  };

  const savedState = JSON.parse(localStorage.getItem("appState"));
  const initialState = savedState || defaultState;

  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <PrimeSender.Provider value={value}>
      {children}
    </PrimeSender.Provider>
  );
}

export function primeSenderController() {
  const context = React.useContext(PrimeSender);

  if (!context) {
    throw new Error(
      "primeSenderController should be used inside the PrimeSenderControllerProvider."
    );
  }

  return context;
}

PrimeSenderControllerProvider.displayName = "/src/context/index.jsx";

PrimeSenderControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const setOpenSidenav = (dispatch, value) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (dispatch, value) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (dispatch, value) =>
  dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch, value) =>
  dispatch({ type: "FIXED_NAVBAR", value });
export const updatePhoneAndAttempts = (dispatch, phone, transfer_attempts) =>
  dispatch({
    type: "UPDATE_PHONE_AND_ATTEMPTS",
    payload: { phone, transfer_attempts },
  });
export const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
export const setCredentials = (dispatch, value) =>
  dispatch({ type: "SET_CREDENTIALS", value });
export const setProfile = (dispatch, value) =>
  dispatch({ type: "SET_PROFILE", value });
export const clearCredentials = (dispatch) =>
  dispatch({ type: "CLEAR_CREDENTIALS" });
export const resetAppState = (dispatch) => {
  localStorage.removeItem("appState");
  dispatch({ type: "RESET_APP_STATE" });
};
