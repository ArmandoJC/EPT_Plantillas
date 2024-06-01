import { Link } from 'react-router-dom';
import { images } from '../../../constants'
import './ListMenuFooter.css';


export const ListMenuFooter = ({ description, route }) => {
  return (
    // <li>
    <div className="listMenu__item">
      <div className="listMenu__item-logo">
        {/* <img src={images.ssc_list_dot} alt="app logo" /> */}
      </div>
      <div className="listMenu__description">
        <Link to={`#`}>{description}</Link>
      </div>
    </div>
    // </li>
  );
};
