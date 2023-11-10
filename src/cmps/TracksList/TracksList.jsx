import { TracksPreview } from "../TracksPreview/TracksPreview";


import PropTypes from 'prop-types';

export const TracksList = ({ savedTracks }) => {

  return (
    <div className="tracks-list">
      <h2>Your Saved Tracks</h2>
      <a>Show all</a>
      <ul className="tracks-list card">
        {savedTracks ? savedTracks.map(({ track }) => (
          <li key={track.id}>
            <TracksPreview track={track} />
          </li>
        )) : ""}
      </ul>
    </div>
  );
};


TracksList.propTypes = {
  savedTracks: PropTypes.array,
};
/*
{Object.keys(track).map(function (key) {
        return <li key={key} value={key}>{`${key}: ${track[key]}`}</li>
      })}
*/