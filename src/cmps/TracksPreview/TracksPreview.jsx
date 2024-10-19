
import PropTypes from 'prop-types';



export const TracksPreview = ({ track }) => {
  const goAlbumPage = (albumId) => {
    //ev.stopPropagation()
  }
  const getArtistsStr = () => {
    return track.artists.map((artist) => {
      return artist.name
    })
  }

  return (
    <div className='track-preview card' onClick={() => goAlbumPage(track.id)}>
      <img src={track.album.images[0].url} alt="" />
      <p className='card-name'>{track.name}</p>
      <p className='card-artist'>{getArtistsStr().toString()}</p>
    </div>
  );
};
TracksPreview.propTypes = {
  track: PropTypes.object,
};
