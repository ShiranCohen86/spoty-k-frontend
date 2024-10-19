import { CardList } from "../CardList";


import PropTypes from 'prop-types';

export const PlaylistsList = ({ savedPlaylists }) => {
  const title = "My Playlists"
  const albumsPageHref = "/playlists"
  const getCardImgUrl = (playlist) => playlist.images[0].url

  const savedPlayList = savedPlaylists.map((playlist) => {
    return {
      imgUrl: getCardImgUrl(playlist),
      firstP: playlist.name,
      secondP: playlist.description,
      navigateLink: `${albumsPageHref}/${playlist.id} `
    }
  })

  return (
    <div className="playlists-list">
      <CardList items={savedPlayList} title={title} href={albumsPageHref} />
    </div>
  );
};


PlaylistsList.propTypes = {
  savedPlaylists: PropTypes.array,
};
