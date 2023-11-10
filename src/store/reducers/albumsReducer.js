const INITIAL_STATE = {
  albumById: "",
  albums: [],
  tracks: {},
  savedAlbums: ""
};

export const albumsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ALBUM_BY_ID":
      return {
        ...state,
        albumById: action.album,
      };
    case "ALBUMS_BY_IDS":
      return {
        ...state,
        albums: action.albums,
      };
    case "TRACKS_BY_ALBUM":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SAVED_ALBUMS":
      return {
        ...state,
        savedAlbums: action.savedAlbums,
      };

    default:
      return state;
  }
};
