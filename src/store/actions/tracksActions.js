import { trackService } from "../../services/tracksService";

export const getTrackById = (paramsObj) => {
  return async (dispatch) => {
    try {
      const track = await trackService.getTrackById(paramsObj)
      dispatch({ type: "TRACK_BY_ID", track });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getTracksByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const tracks = await trackService.getTracksByIds(paramsObj)
      dispatch({ type: "TRACKS_BY_IDS", tracks });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getTracksByTrackId = (paramsObj) => {
  return async (dispatch) => {
    try {
      const tracks = await trackService.getTracksByTrackId(paramsObj)
      dispatch({ type: "TRACKS_BY_TRACK", tracks });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getSavedTracks = (paramsObj) => {
  return async (dispatch) => {
    try {
      const savedTracks = await trackService.getSavedTracks(paramsObj)
      dispatch({ type: "SAVED_TRACKS", savedTracks });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};
export const addTracksByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const test = await trackService.addTracksByIds(paramsObj)
      dispatch({ type: "REMOVED_TRACKS" });
      dispatch({ type: "ADDED_TRACKS" });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};
export const removeTracksByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const test = await trackService.removeTracksByIds(paramsObj)
      dispatch({ type: "REMOVED_TRACKS" });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};




