import { useDispatch } from "react-redux";
import { setMyUser } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/imgs/back.png"
import nextIcon from "../../assets/imgs/next.png";
import profileIcon from "../../assets/imgs/profile.png";


export const SubHeader = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getMyUser = async () => {
    dispatch(setMyUser())
    navigate("/user")
  };

  return (
    <header className="sub-header no-select"  >
        <img  src={backIcon} alt="Back" onClick={() => navigate(-1)}/>
        <img src={nextIcon} alt="Next" onClick={() => navigate(1)}/>
        <img src={profileIcon} alt="Profile" onClick={getMyUser} className="test"/>
    </header>
  );
};
