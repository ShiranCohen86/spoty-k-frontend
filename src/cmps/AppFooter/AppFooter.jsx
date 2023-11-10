import { useDispatch } from "react-redux";
//import { playSong } from "../../store/actions/userActions";
import { addAlbumsByIds, removeAlbumsByIds, getSavedAlbums } from "../../store/actions/albumsActions";


export const AppFooter = () => {
  const dispatch = useDispatch()


  const elPlaySong = () => {
    //dispatch(playSong())
    const paramsObj = {
      ids: ["4aawyAB9vmqN3uQ7FjRGTy", "3sW7wD2qdMjs7KncaOoIJ5", "7K6OykPbezfgKgBufihn6X", "06RK0wX4GqHcxBtHlVoGH5"],
    }
    //dispatch(addAlbumsByIds(paramsObj))
    dispatch(removeAlbumsByIds(paramsObj))
  }
  return (
    <footer className="app-footer no-select" >
      <h1>Player Controller</h1>
      <button onClick={() => elPlaySong()}>play</button>
    </footer>
  );
};
