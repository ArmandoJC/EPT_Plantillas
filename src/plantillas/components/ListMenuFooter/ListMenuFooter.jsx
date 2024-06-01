import { Link } from 'react-router-dom';
import './ListMenuFooter.css';


export const ListMenuFooter = ({ description, route, image }) => {
  return (
    // <li>
    <div className="listMenu__item">
      <div className="listMenu__item-logo">
        <img src={image} alt="app logo" />
      </div>
      <div className="listMenu__description">
        <Link to={`#`}>{description}</Link>
      </div>
    </div>
    // </li>
  );
};
