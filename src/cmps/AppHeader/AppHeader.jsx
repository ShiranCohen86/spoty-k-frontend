import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/imgs/home.png";
import searchIcon from "../../assets/imgs/search.png";


export const AppHeader = () => {
  const navigate = useNavigate()



  return (
    <header className="app-header no-select"  >
      <div className="homepage-btn" onClick={() => navigate("/")}>
        <img src={homeIcon} alt="Home Logo" />
        <p>Home</p>
      </div>
      <div className="serach-btn">
        <img src={searchIcon} alt="Search Logo" />
        <p>Search</p>
      </div>
      <br />
    </header>
  );
};
