import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
  UPDATE_LOG
} from "./types";

//get logs
export const getLogs = () => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch("/logs");
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

//Add log
export const addLog = log => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch("/logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      dispatch({
        type: ADD_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

// delete log
export const deleteLog = id => {
  return async dispatch => {
    try {
      setLoading();

      await fetch(`/logs/${id}`, {
        method: "DELETE"
      });

      dispatch({
        type: DELETE_LOGS,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

//updatelog
export const updateLog = log => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

//serch logs
export const searchLogs = text => {
  return async dispatch => {
    try {
      setLoading();
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();
      dispatch({
        type: SEARCH_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
};

//set current

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

//clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

//set loading
export const setLoading = () => {
  return { type: SET_LOADING };
};
