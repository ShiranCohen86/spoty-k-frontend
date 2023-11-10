import { useEffect } from "react";
import { httpService } from "../../services/httpService"
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSavedPlaylists } from "../../store/actions/playlistsActions";
import { getSavedAlbums } from "../../store/actions/albumsActions";
import { getSavedTracks } from "../../store/actions/tracksActions";

export const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    const isFromHomePage = sessionStorage.getItem("isComeFromHomePage") === "true" ? true : false
    if (isFromHomePage) {
      const paramsString = searchParams.toString()
      const params = new URLSearchParams(paramsString);
      const code = params.get('code');
      const stateStr = params.get('state');

      const setSpotifyCode = async ({ code, stateStr }) => {
        await httpService.post("auth", { code, stateStr })
        sessionStorage.setItem("isLogged", true)
        dispatch(getSavedAlbums())
        dispatch(getSavedPlaylists())
        dispatch(getSavedTracks())
        navigate("/")
      }
      setSpotifyCode({ code, stateStr })
    } else {
      navigate("/")
    }


  }, [navigate, searchParams])


  return (
    <div className="callback-page">
    </div>
  );
};
