import { playlistService } from "../../services/playlistsService";

export const getPlaylistById = (paramsObj) => {
  return async (dispatch) => {
    try {
      const playlist = await playlistService.getPlaylistById(paramsObj)
      dispatch({ type: "PLAYLIST_BY_ID", playlist });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getPlaylistsByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const playlists = await playlistService.getPlaylistsByIds(paramsObj)
      dispatch({ type: "PLAYLISTS_BY_IDS", playlists });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getTracksByPlaylistId = (paramsObj) => {
  return async (dispatch) => {
    try {
      const tracks = await playlistService.getTracksByPlaylistId(paramsObj)
      dispatch({ type: "TRACKS_BY_PLAYLIST", tracks });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getSavedPlaylists = (paramsObj) => {
  return async (dispatch) => {
    try {
      const savedPlaylists = await playlistService.getSavedPlaylists(paramsObj)
      dispatch({ type: "SAVED_PLAYLISTS", savedPlaylists });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};
export const addPlaylistsByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const test = await playlistService.addPlaylistsByIds(paramsObj)
      dispatch({ type: "REMOVED_PLAYLISTS" });
      dispatch({ type: "ADDED_PLAYLISTS" });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};
export const removePlaylistsByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const test = await playlistService.removePlaylistsByIds(paramsObj)
      dispatch({ type: "REMOVED_PLAYLISTS" });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};




