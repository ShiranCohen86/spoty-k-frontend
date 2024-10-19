
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const CardPreview = ({ item }) => {
  const { imgUrl, firstP, secondP, navigateLink } = item
  const subStrFirstP = firstP.substr(0, 20)
  const subStrSecondP = secondP.substr(0, 35)

  const navigate = useNavigate()


  return (
    <div className='card' onClick={() => navigate(navigateLink)} >
      <img className='card-img' src={imgUrl} alt="" />
      <p className='card-first-p' >{subStrFirstP}</p>
      <p className='card-second-p'>{subStrSecondP}</p>
    </div >
  );
};

CardPreview.propTypes = {
  item: PropTypes.object
};