import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="px-lg py-5 bg-neutral-50 border flex gap-10 items-baseline">
      <Link to="/">
        <h1 className="text-primary text-3xl font-bold">Bookstore</h1>
      </Link>
      <ul className="flex gap-10 text-sm font-medium tracking-widest">
        <li>
          <Link
            to="/"
            className={`hover:text-blue-500 ${
              location.pathname === '/' || location.pathname === '/bookstore'
                ? 'text-neutral-900'
                : 'text-gray-400'
            }`}
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className={`hover:text-blue-500 ${
              location.pathname === '/categories'
                ? 'text-neutral-900'
                : 'text-gray-400'
            }`}
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
      <div className="ml-auto text-primary">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
};

export default Nav;
