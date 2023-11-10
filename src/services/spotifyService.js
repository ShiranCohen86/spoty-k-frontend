// import { storageService } from './async-storage.service.js';
import { httpService } from "./httpService.js";

import { makeId } from "../services/utilService.js"
// import { userService } from "./userService.js";
const { MODE, VITE_SPOTIFY_CLIENT_ID, VITE_REDIRECT_URI_PROD, VITE_REDIRECT_URI_DEV, VITE_SPOTIFY_SCOPES } = import.meta.env



export const spotifyService = {
  getMyDetails,

  playSong,
  setLoggedUser,
  isLoggedUser,
  login
};


function login() {
  const state = makeId(16);
  const scope = VITE_SPOTIFY_SCOPES;
  const redirectUri = MODE === "production" ? VITE_REDIRECT_URI_PROD : VITE_REDIRECT_URI_DEV
  const clientId = VITE_SPOTIFY_CLIENT_ID
  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`
  sessionStorage.setItem("isComeFromHomePage", true)
  window.location.href = url
  return null;
}

async function isLoggedUser() {
  // return storageService.query("user");
  const isLogged = await httpService.get(`session`);
  sessionStorage.setItem("isLogged", isLogged)
  return isLogged
}

function getMyDetails() {
  // return storageService.query("user");
  return httpService.get(`users/me`);
}

function setLoggedUser() {
  const isLogged = httpService.get("session")
  sessionStorage.setItem("isLogged", isLogged)
  if (!isLogged) {
    spotifyService.login()
  }
}

function playSong() {
  // mobile - "e2a6858dc4f2cbc3601e4c65fef0ffcd7293de69"
  // pc - "d56778359711b017aa6af352d593209b4e111b57"


  //return httpService.get("player/state?market=US");
  //return httpService.put("player/transfer", { deviceIds: ["e2a6858dc4f2cbc3601e4c65fef0ffcd7293de69"], isPlay: true });
  //return httpService.get("player/devices");
  //return httpService.get("player/curr-play");
  //return httpService.put("player/play?deviceId=e2a6858dc4f2cbc3601e4c65fef0ffcd7293de69", { "positionMs": "2000" });
  //return httpService.put("player/pause?deviceId=e2a6858dc4f2cbc3601e4c65fef0ffcd7293de69");
  //return httpService.post("player/next?deviceId=d56778359711b017aa6af352d593209b4e111b57");// { device_id: "d56778359711b017aa6af352d593209b4e111b57" });
  //return httpService.post("player/previous", { device_id: "d56778359711b017aa6af352d593209b4e111b57" });
  //return httpService.put("player/seek?deviceId=d56778359711b017aa6af352d593209b4e111b57&positionMs=2000");// { device_id: "d56778359711b017aa6af352d593209b4e111b57", "position_ms": "20" });
  //return httpService.put("player/repeat?deviceId=d56778359711b017aa6af352d593209b4e111b57&state=context");//, { device_id: "d56778359711b017aa6af352d593209b4e111b57", "state": "context" });
  //return httpService.put("player/volume?deviceId=d56778359711b017aa6af352d593209b4e111b57&volume=100");
  //return httpService.put("player/shuffle?deviceId=d56778359711b017aa6af352d593209b4e111b57&state=true");//, state: false });
  //return httpService.get("player/recently-played?limit=17");
  //return httpService.get("player/queue");
  //return httpService.post("player/queue?uri=spotify:track:0IAcIa7VPQniHBq51IccgY&deviceId=d56778359711b017aa6af352d593209b4e111b57");

  // rihana id "5pKCCKE2ajJHZ9KAiaK11H"

  //return httpService.get("users/me/top?type=tracks");
  //return httpService.get("users?userId=31a5dyo2rxwpltf2xkedj3c7gnze");
  //return httpService.get("users/followed-artists?type=artist");
  //return httpService.put("users/follow-users?type=artist&ids=5pKCCKE2ajJHZ9KAiaK11H", { ids: ["5pKCCKE2ajJHZ9KAiaK11H"] });
  //return httpService.delete("users/unfollow-users?type=artist&ids=5pKCCKE2ajJHZ9KAiaK11H", { ids: ["5pKCCKE2ajJHZ9KAiaK11H"] });





  return httpService.get("albums/id?albumId=4aawyAB9vmqN3uQ7FjRGTy");
  //return httpService.get("albums/saved?limit=2");





}

