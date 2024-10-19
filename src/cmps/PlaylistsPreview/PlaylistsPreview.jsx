
import PropTypes from 'prop-types';



export const PlaylistsPreview = ({ playlist }) => {
  const goAlbumPage = (playlistId) => {
    //ev.stopPropagation()
  }

  return (
    <div className='playlists-preview card' onClick={() => goAlbumPage(playlist.id)}>
      <img src={playlist.images[0].url} alt="" />
      <p className='card-name'>{playlist.name}</p>
    </div>
  );
};
PlaylistsPreview.propTypes = {
  playlist: PropTypes.object,
};
