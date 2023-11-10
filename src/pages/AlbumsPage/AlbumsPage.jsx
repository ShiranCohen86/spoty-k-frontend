import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../store/actions/userActions";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbumById } from "../../store/actions/albumsActions";




export const AlbumsPage = () => {
  const albumById = useSelector((state) => state.albumsReducer.albumById);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams();

  useEffect(() => {
    //const isLogged = sessionStorage.getItem("isLogged") === "true" ? true : false
    //!isLogged && dispatch(setLoggedUser())

    const paramsObj = {
      id: params.id
    }
    dispatch(getAlbumById(paramsObj))


  }, [dispatch, params])



  return (
    <div className="albums-page" >
      <h1>Albums Page</h1>
      {albumById ? albumById.name : ""}
    </div>
  )
};
