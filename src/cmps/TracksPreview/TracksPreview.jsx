
import PropTypes from 'prop-types';



export const TracksPreview = ({ track }) => {
  const goAlbumPage = (albumId) => {
    //ev.stopPropagation()
    console.log("here", albumId);
  }

  return (
    <div className='track-preview card' onClick={() => goAlbumPage(track.id)}>
      <img src={track.album.images[0].url} alt="" />
      <p>{track.name}</p>
    </div>
  );
};
TracksPreview.propTypes = {
  track: PropTypes.object,
};
