const INITIAL_STATE = {
  playlistById: "",
  playlists: [],
  tracks: {},
  savedPlaylists: ""
};

export const playlistsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PLAYLIST_BY_ID":
      return {
        ...state,
        playlistById: action.playlist,
      };
    case "PLAYLISTS_BY_IDS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "TRACKS_BY_PLAYLIST":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SAVED_PLAYLISTS":
      return {
        ...state,
        savedPlaylists: action.savedPlaylists,
      };

    default:
      return state;
  }
};
