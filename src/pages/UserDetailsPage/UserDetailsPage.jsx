import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../../store/actions/userActions";

export const UserDetailsPage = () => {
  const userRes = useSelector((state) => state.userReducer.myUser);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoggedUser())

  }, [dispatch])

  return (
    <div className="user-details-page">
      {Object.keys(userRes).length ?
        <>
          <h1>{userRes.display_name}</h1>
          <h1>{userRes.country}</h1>
          <h1>{userRes.email}</h1>
          <h1>{userRes.external_urls.spotify}</h1>
          <h1>{userRes.followers.href}</h1>
          <h1>{userRes.id}</h1>
          <h1>{userRes.product}</h1>
          <h1>{userRes.type}</h1>
        </>
        :
        <><h1>Loading...</h1></>
      }
    </div>
  );
};
