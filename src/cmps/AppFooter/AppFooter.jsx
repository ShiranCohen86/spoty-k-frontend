import { useDispatch } from "react-redux";
//import { playSong } from "../../store/actions/userActions";
import { addAlbumsByIds, removeAlbumsByIds, getSavedAlbums } from "../../store/actions/albumsActions";
import playIcon from "../../assets/icons/play.jpg";
import backwardIcon from "../../assets/icons/backward.jpg";
import forwardIcon from "../../assets/icons/forward.jpg";
import replayIcon from "../../assets/icons/replay.jpg";
import shuffleIcon from "../../assets/icons/shuffle.jpg";
import muteIcon from "../../assets/icons/mute.jpg";
import queueIcon from "../../assets/icons/queue.jpg";
import devicesIcon from "../../assets/icons/devices.jpg";


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
      <div className="preview-live">
        <p>preview-live</p>
      </div>
      <div className="footer-btn">
        <div className="footer-btn-up">
        <img src={replayIcon} alt="replay" />
        <img src={backwardIcon} alt="backward" />
        <img src={playIcon} onClick={() => elPlaySong()} alt="Play" />
        <img src={forwardIcon} alt="forward" />
        <img src={shuffleIcon} alt="shuffle" />

        </div>
        <div className="footer-btn-down">
        <img src={muteIcon} alt="mute" />
        <img src={queueIcon} alt="queue" />
        <img src={devicesIcon} alt="devices" />

        </div>
      </div>
      <div className="footer-lyrics">
        <p>footer-lyrics</p>

      </div>
    </footer>
  );
};
