import {
  GET_TECHS,
  ADD_TECH,
  TECHS_ERROR,
  DELETE_TECH,
  SET_LOADING
} from "./types";

//get techs
export const getTechs = () => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch("/techs");
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

// add techs
export const addTech = tech => {
  return async dispatch => {
    try {
      setLoading();

      const res = await fetch("/techs", {
        method: "POST",
        body: JSON.stringify(tech),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      dispatch({
        type: ADD_TECH,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

//delete tech

export const deleteTech = id => {
  return async dispatch => {
    try {
      setLoading();
      await fetch(`/techs/${id}`, {
        method: "DELETE"
      });

      dispatch({
        type: DELETE_TECH,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

export const setLoading = () => {
  return { type: SET_LOADING };
};
