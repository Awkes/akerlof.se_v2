/** @jsx jsx */
import { jsx } from "theme-ui";
import logo from "../images/logo.svg";
import Menu, { closeMenu, animateLogo } from "../components/Menu";
import { Link } from "gatsby";

export default({children}) => {
  const styles = {
    logo: {
      display: 'block',
      width: '3em',
      filter: 'drop-shadow(shadows.darkSmallShadow)',
      transition : 'transform 1s ease-in-out'
    }
  }
  return (
    <header>
      <Link to="/#home" onClick={closeMenu}>
        <img 
          src={logo} 
          sx={styles.logo} 
          onLoad={animateLogo} 
          id="logo" 
          alt="Logo" 
        />
      </Link>
      <Menu />
    </header>
  );
}