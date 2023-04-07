import './error.css';
import { Link } from 'react-router-dom';
import { IoReturnDownBack } from 'react-icons/io5';

export const ErrorPage = () => {
  return (
    <div className="errorContainer">
      <h2>404</h2>
      <p>SORRY, PAGE NOT FOUND</p>
      <Link to="/">
        {' '}
        <IoReturnDownBack size={30} />
      </Link>
    </div>
  );
};
