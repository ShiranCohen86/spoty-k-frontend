
import PropTypes from 'prop-types';



export const AlbumPreview = ({ album }) => {
  const goAlbumPage = (albumId) => {
    //ev.stopPropagation()
    console.log("here", albumId);
  }
  const getArtistsStr = () => {
    return album.artists.map((artist) => {
      return artist.name
    })
  }

  return (
    <div className='album-preview card' onClick={() => goAlbumPage(album.id)}>
      <img src={album.images[0].url} alt="" />
      {album && <p className='card-name'>{album.label}</p>}
      <p className='card-artist'>{getArtistsStr().toString()}</p>

    </div>
  );
};
AlbumPreview.propTypes = {
  album: PropTypes.object,
};

/*
*/