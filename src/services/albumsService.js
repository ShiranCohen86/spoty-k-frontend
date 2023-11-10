import { httpService } from "./httpService";

export const albumService = {
  getAlbumById,
  getAlbumsByIds,
  getTracksByAlbumId,
  getSavedAlbums,
  addAlbumsByIds,
  removeAlbumsByIds,
  isAlbumsSavedByIds,
  getNewReleases
}

function getAlbumById(paramsObj) {
  return httpService.get(`albums/id`, paramsObj);
}

function getAlbumsByIds(paramsObj) {
  return httpService.get(`albums/ids`, paramsObj);
}

function getTracksByAlbumId(paramsObj) {
  return httpService.get(`albums/tracks`, paramsObj);
}

function getSavedAlbums(paramsObj) {
  return httpService.get(`albums/saved`, paramsObj);
}

function addAlbumsByIds(paramsObj) {
  return httpService.put(`albums/add`, paramsObj);
}

function removeAlbumsByIds(paramsObj) {
  return httpService.delete(`albums/remove`, paramsObj);
}

function isAlbumsSavedByIds(paramsObj) {
  return httpService.get(`albums/is-saved`, paramsObj);
}

function getNewReleases(paramsObj) {
  return httpService.get(`albums/new`, paramsObj);
}

