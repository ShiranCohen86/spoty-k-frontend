

import PropTypes from 'prop-types';

export const CardDetails = ({ item }) => {
  const convertMsToMinsAndSecs = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <div className="card-details">
      <div className='card-details-top'>
        <img src={item.images[0].url} alt="" />
        <p className="card-details-type">{item.album_type}</p>
        <p className="card-details-name">{item.name}</p>
        <div className='more-details'>
          <a href={`${item.artists[0].id}`}>{item.artists[0].name}</a>
          <p className='dot'>.</p>
          <p className="card-details-release-date">{item.release_date}</p>
          <p className='dot'>.</p>
          <p className="card-details-total-tracks">{item.total_tracks} {item.total_tracks > 1 ? "Songs" : "Song"}</p>
        </div>
        <p></p>
      </div>
      <div className='card-details-bottom'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th className='duration-svg'><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg></th>
            </tr>


          </thead>
          <tbody>
            {
              item.tracks.items.map((item, idx) => (
                <tr key={item.id}>
                  <td className='row-index'>{idx + 1}</td>
                  <td className='row-name'>
                    <div>
                      <p>{item.name}</p>
                      {item.artists.map((artist, idx) => (
                        <a href="" key={artist.id}>{artist.name}{idx + 1 === item.artists.length ? "" : ", "}</a>
                      ))}

                    </div>
                  </td>
                  <td className='row-duration'>{convertMsToMinsAndSecs(item.duration_ms)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  item: PropTypes.object,
};
