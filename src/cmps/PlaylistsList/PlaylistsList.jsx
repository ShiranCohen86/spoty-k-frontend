import { PlaylistsPreview } from "../PlaylistsPreview/PlaylistsPreview";


import PropTypes from 'prop-types';

export const PlaylistsList = ({ savedPlaylists }) => {
  return (
    <div className="playlists-list">
      <h2>Your Saved Playlists</h2>
      <a>Show all</a>
      <ul>
        {savedPlaylists ? savedPlaylists.map((playlist) => (
          <li key={playlist.id}>
            <PlaylistsPreview playlist={playlist} />
          </li>
        )) : ""}
      </ul>
    </div>
  );
};


PlaylistsList.propTypes = {
  savedPlaylists: PropTypes.array,
};
