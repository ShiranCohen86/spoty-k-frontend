import { albumService } from "../../services/albumsService";

export const getAlbumById = (paramsObj) => {
  return async (dispatch) => {
    try {
      const album = await albumService.getAlbumById(paramsObj)
      dispatch({ type: "ALBUM_BY_ID", album });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getAlbumsByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const albums = await albumService.getAlbumsByIds(paramsObj)
      dispatch({ type: "ALBUMS_BY_IDS", albums });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getTracksByAlbumId = (paramsObj) => {
  return async (dispatch) => {
    try {
      const tracks = await albumService.getTracksByAlbumId(paramsObj)
      dispatch({ type: "TRACKS_BY_ALBUM", tracks });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};

export const getSavedAlbums = (paramsObj) => {
  return async (dispatch) => {
    try {
      const savedAlbums = await albumService.getSavedAlbums(paramsObj)
      dispatch({ type: "SAVED_ALBUMS", savedAlbums });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};
export const addAlbumsByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const test = await albumService.addAlbumsByIds(paramsObj)
      dispatch({ type: "REMOVED_ALBUMS" });
      dispatch({ type: "ADDED_ALBUMS" });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};
export const removeAlbumsByIds = (paramsObj) => {
  return async (dispatch) => {
    try {
      const test = await albumService.removeAlbumsByIds(paramsObj)
      dispatch({ type: "REMOVED_ALBUMS" });
    } catch (error) {
      console.log(error);
      throw error
    }
  };
};




