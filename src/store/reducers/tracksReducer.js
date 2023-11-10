const INITIAL_STATE = {
  trackById: "",
  tracks: [],
  savedTracks: ""
};

export const tracksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TRACK_BY_ID":
      return {
        ...state,
        trackById: action.track,
      };
    case "TRACKS_BY_IDS":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "TRACKS_BY_TRACK":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SAVED_TRACKS":
      return {
        ...state,
        savedTracks: action.savedTracks,
      };

    default:
      return state;
  }
};
