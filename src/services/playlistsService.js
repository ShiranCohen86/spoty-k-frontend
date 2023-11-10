import { httpService } from "./httpService";

export const playlistService = {
  getPlaylistById,
  getPlaylistsByIds,
  getTracksByPlaylistId,
  getSavedPlaylists,
  addPlaylistsByIds,
  removePlaylistsByIds,
  isPlaylistsSavedByIds,
  getNewReleases
}

function getPlaylistById(paramsObj) {
  return httpService.get(`playlists/id`, paramsObj);
}

function getPlaylistsByIds(paramsObj) {
  return httpService.get(`playlists/ids`, paramsObj);
}

function getTracksByPlaylistId(paramsObj) {
  return httpService.get(`playlists/tracks`, paramsObj);
}

function getSavedPlaylists(paramsObj) {
  return httpService.get(`playlists/saved`, paramsObj);
}

function addPlaylistsByIds(paramsObj) {
  return httpService.put(`playlists/add`, paramsObj);
}

function removePlaylistsByIds(paramsObj) {
  return httpService.delete(`playlists/remove`, paramsObj);
}

function isPlaylistsSavedByIds(paramsObj) {
  return httpService.get(`playlists/is-saved`, paramsObj);
}

function getNewReleases(paramsObj) {
  return httpService.get(`playlists/new`, paramsObj);
}

