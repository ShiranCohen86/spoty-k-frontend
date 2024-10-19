import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlbumById } from "../../store/actions/albumsActions";
import { CardDetails } from "../../cmps/CardDetails/CardDetails";

export const AlbumPage = () => {
  const albumById = useSelector((state) => state.albumsReducer.albumById);
  console.log({ albumById });
  const dispatch = useDispatch()
  const params = useParams();

  useEffect(() => {
    const paramsObj = {
      id: params.id
    }
    dispatch(getAlbumById(paramsObj))
  }, [dispatch, params])


  return (

    <div className="album-page">
      {albumById ?
        <CardDetails item={albumById}></CardDetails>
        : ""}
    </div >

  )
};
/*
<div>
          <div>
            <img src={albumById.images[0].url} alt="" />
            <p className="album-type">{albumById.album_type}</p>
            <p className="album-name">{albumById.name}</p>
            <a href={`${albumById.artists[0].id}`}>{albumById.artists[0].name}</a>
            <p className="album-release-date">{albumById.release_date}</p>
            <p className="album-total-tracks">{albumById.total_tracks}</p>
            <p></p>
          </div>
          <div>
            <table>
              <tr><td>
              </td></tr>
            </table>
          </div>
        </div>
*/