import { CardList } from "../CardList";


import PropTypes from 'prop-types';

export const TracksList = ({ savedTracks }) => {
  const title = "Tracks List"
  const albumsPageHref = "/tracks"

  const getArtistsStr = (artists) => {
    let strArtists = ""
    artists.forEach((artist) => {
      strArtists = strArtists ? `${strArtists}, ${artist.name}` : artist.name
    })
    return strArtists
  }
  const getCardImgUrl = (track) => track.album.images[0].url
  const tracks = savedTracks.map(({ track }) => {
    return {
      imgUrl: getCardImgUrl(track),
      firstP: track.name,
      secondP: getArtistsStr(track.artists),
      navigateLink: `${albumsPageHref}/${track.id} `
    }
  })

  return (
    <div className="tracks-list">
      <CardList items={tracks} title={title} href={albumsPageHref} />
    </div>
  );
};


TracksList.propTypes = {
  savedTracks: PropTypes.array,
};
/*
{Object.keys(track).map(function (key) {
        return <li key={key} value={key}>{`${key}: ${track[key]}`}</li>
      })}
*/