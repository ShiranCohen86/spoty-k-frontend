import { useNavigate } from "react-router-dom";
import { AlbumPreview } from "../AlbumPreview/AlbumPreview";


import PropTypes from 'prop-types';

export const AlbumsList = ({ albums, title }) => {

  const navigate = useNavigate()
  const goAlbumDetails = (ev, albumId) => {
    ev.stopPropagation()
    navigate(`/albums/${albumId}`)
  }



  const id = (album) => {
    return <li key={album.album.id} onClick={(ev) => goAlbumDetails(ev, album.album.id)} >
      <AlbumPreview album={album.album} />
    </li>
  }



  return (
    <div className="albums-list">
      <h2>Your Saved {title}</h2>
      <a href="/user">Show all</a>
      <ul>
        {albums ? albums.map((album) => (
          id(album)
        )) : ""}
      </ul>
    </div >
  );
};
/*
<li key={album.id} onClick={(ev) => goAlbumDetails(ev, album.id)} >
            <AlbumPreview album={album} />
          </li>
*/

AlbumsList.propTypes = {
  albums: PropTypes.array,
  title: PropTypes.string
};
/*
{Object.keys(album).map(function (key) {
        return <li key={key} value={key}>{`${key}: ${album[key]}`}</li>
      })}
*/