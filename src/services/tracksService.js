import { httpService } from "./httpService";

export const trackService = {
  getTrackById,
  getTracksByIds,
  getTracksByTrackId,
  getSavedTracks,
  addTracksByIds,
  removeTracksByIds,
  isTracksSavedByIds,
  getNewReleases
}

function getTrackById(paramsObj) {
  return httpService.get(`tracks/id`, paramsObj);
}

function getTracksByIds(paramsObj) {
  return httpService.get(`tracks/ids`, paramsObj);
}

function getTracksByTrackId(paramsObj) {
  return httpService.get(`tracks/tracks`, paramsObj);
}

function getSavedTracks(paramsObj) {
  return httpService.get(`tracks/saved`, paramsObj);
}

function addTracksByIds(paramsObj) {
  return httpService.put(`tracks/add`, paramsObj);
}

function removeTracksByIds(paramsObj) {
  return httpService.delete(`tracks/remove`, paramsObj);
}

function isTracksSavedByIds(paramsObj) {
  return httpService.get(`tracks/is-saved`, paramsObj);
}

function getNewReleases(paramsObj) {
  return httpService.get(`tracks/new`, paramsObj);
}

