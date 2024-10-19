import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../store/actions/userActions";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbumById, getSavedAlbums } from "../../store/actions/albumsActions";
import { AlbumsList } from "../../cmps/AlbumsList";
import { CardPreview } from "../../cmps/CardPreview/CardPreview";




export const AlbumsPage = () => {
  const albumById = useSelector((state) => state.albumsReducer.albumById);
  const savedAlbums = useSelector((state) => state.albumsReducer.savedAlbums);
  console.log(savedAlbums.items);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams();


  const getArtistsStr = (album) => {
    let strArtists = ""
    album.artists.forEach((artist) => {
      strArtists = strArtists ? `${strArtists}, ${artist.name}` : artist.name
    })
    return strArtists
  }

  const getCardImgUrl = (album) => album.images[0].url

  const albumsList = (items) => items.map(({ album }) => {
    const albumsPageHref = "/album"
    return {
      imgUrl: getCardImgUrl(album),
      firstP: album.name,
      secondP: getArtistsStr(album),
      navigateLink: `${albumsPageHref}/${album.id} `
    }
  }
  )

  useEffect(() => {
    //const isLogged = sessionStorage.getItem("isLogged") === "true" ? true : false
    //!isLogged && dispatch(setLoggedUser())
    if (typeof (savedAlbums) === "string") {
      dispatch(getSavedAlbums())
    }



  }, [dispatch, savedAlbums])



  return (
    <div className="albums-page" >
      <h1>Albums Page</h1>
      {savedAlbums?.items ? albumsList(savedAlbums.items).map((item) => (
        <li key={item.id}  >
          <CardPreview item={item} key={item.id} />
        </li>
      )) : ""}
    </div>
  )
};
