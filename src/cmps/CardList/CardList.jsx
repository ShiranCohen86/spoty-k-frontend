import { CardPreview } from "../CardPreview/CardPreview";


import PropTypes from 'prop-types';

export const CardList = ({ items, title, href }) => {

  return (
    <div className="card-list">
      <h2>{title}</h2>
      <a href={href}>Show all</a>
      <ul>
        {items ? items.map((item) => (
          <li key={item.id}  >
            <CardPreview item={item} key={item.id} />
          </li>
        )) : ""}
      </ul>
    </div >
  );
};

CardList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  href: PropTypes.string
};
