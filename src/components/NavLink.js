/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const NavLink = ({ url, children }) => (
  <Link 
    to={url} 
    sx={{
      color: 'text',
      display: 'block',
      padding: 1,
    }}
  >
    {children}
  </Link>
);

export default NavLink;

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}