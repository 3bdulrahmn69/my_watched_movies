import PropTypes from 'prop-types';
import Logo from './Logo';

const Nav = ({ children }) => {
  return (
    <nav className="flex justify-between items-center pt-2 h-16">
      <Logo />
      {children}
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
