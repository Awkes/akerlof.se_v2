/** @jsx jsx */
import { jsx } from 'theme-ui';
import Logo from './Logo'
import Menu from './Menu';

const Header = () => (
  <header
    sx={{
      height: ['auto', '5em'],
      alignItems: 'center',
      backgroundColor: ['transparent', 'header'],
      borderBottom: ['0', 'darkBorder'],
      position: 'fixed',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: 3,
      zIndex: 1313,
    }}
  >
    <Logo />
    <Menu />
  </header>
);

export default Header;