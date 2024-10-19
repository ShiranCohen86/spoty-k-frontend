import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { AlbumsList } from "../../cmps/AlbumsList";
import { getAlbumById, getAlbumsByIds, getSavedAlbums } from "../../store/actions/albumsActions";
import { getSavedPlaylists } from "../../store/actions/playlistsActions";
import { PlaylistsList } from "../../cmps/PlaylistsList/PlaylistsList";
import { getSavedTracks } from "../../store/actions/tracksActions";
import { TracksList } from "../../cmps/TracksList";
import { CardList } from "../../cmps/CardList";




export const HomePage = () => {
  // const isLogged = useSelector((state) => state.userReducer.isLogged);
  const savedAlbums = useSelector((state) => state.albumsReducer.savedAlbums);
  const savedPlaylists = useSelector((state) => state.playlistsReducer.savedPlaylists);
  const savedTracks = useSelector((state) => state.tracksReducer.savedTracks);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const paramsObj = {
      ids: ["4aawyAB9vmqN3uQ7FjRGTy", "3sW7wD2qdMjs7KncaOoIJ5", "7K6OykPbezfgKgBufihn6X", "06RK0wX4GqHcxBtHlVoGH5"],
      market: ""
    }
    const queryObj = {
      //limit: 8,
      //offset:10
    }
    const isLogged = sessionStorage.getItem("isLogged") === "true" ? true : false
    !isLogged && dispatch(setLoggedUser())
    if (isLogged) {
      if (typeof (savedAlbums) === "string") {
        dispatch(getSavedAlbums(queryObj))
      }
      !savedPlaylists && dispatch(getSavedPlaylists(queryObj))
      !savedTracks && dispatch(getSavedTracks(queryObj))
    }
  }, [])
  return (
    <div className="home-page" >
      {savedAlbums && savedPlaylists && savedTracks && savedAlbums.items.length && savedPlaylists.items.length && savedTracks.items.length &&
        <div>
          <AlbumsList albums={savedAlbums.items} ></AlbumsList>
          <PlaylistsList savedPlaylists={savedPlaylists.items}></PlaylistsList>
          <TracksList savedTracks={savedTracks.items}></TracksList>
        </div>
      }
    </div>
  )
};