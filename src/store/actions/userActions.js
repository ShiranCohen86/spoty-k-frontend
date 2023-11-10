import { spotifyService } from "../../services/spotifyService";



export const setLoggedUser = () => {
  return async (dispatch) => {
    const isLoggedUser = await spotifyService.isLoggedUser()
    if (!isLoggedUser) {
      spotifyService.login()
      dispatch({ type: "SET_ISLOGGED", isLoggedUser });
    }
  };
};
export const setMyUser = () => {
  return async (dispatch) => {
    const myUser = await spotifyService.getMyDetails()
    dispatch({ type: "MY_USER", myUser });
  };
};
export const playSong = () => {
  return async (dispatch) => {

    try {
      const isPlay = await spotifyService.playSong()
      dispatch({ type: "STATE", isPlay });
    } catch (error) {
      console.log(error.response.data);
    }



    //dispatch({ type: "MY_USER", myUser });
  };
};




