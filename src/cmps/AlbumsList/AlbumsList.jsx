import PropTypes from 'prop-types';
import { CardList } from '../CardList/CardList';

export const AlbumsList = ({ albums }) => {
  const title = "Saved Albums"
  const albumsPageHref = "/album"
  const getArtistsStr = (album) => {
    let strArtists = ""
    album.artists.forEach((artist) => {
      strArtists = strArtists ? `${strArtists}, ${artist.name}` : artist.name
    })
    return strArtists
  }

  const getCardImgUrl = (album) => album.images[0].url

  const albumsList = albums.map(({ album }) => {
    return {
      imgUrl: getCardImgUrl(album),
      firstP: album.name,
      secondP: getArtistsStr(album),
      navigateLink: `${albumsPageHref}/${album.id} `
    }
  }
  )


  return (
    <div className="albums-list">
      <CardList items={albumsList} title={title} href={albumsPageHref} />
    </div >
  );
};

AlbumsList.propTypes = {
  albums: PropTypes.array,
  title: PropTypes.string
};
