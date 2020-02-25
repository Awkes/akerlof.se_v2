/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useState, useRef, useEffect } from 'react';
import { globalHistory } from '@reach/router';

const Logo = () => {
  const { 
    wordpressWpLogo: { 
      url: { alt_text: logoAlt, source_url: logoUrl }
    }
  } = useStaticQuery(graphql`
    query {
      wordpressWpLogo {
        url {
          alt_text
          source_url
        }
      }
    }
  `)

  const [deg, setDeg] = useState(720);
  const logo = useRef(null);

  const animateLogo = () => {
    setDeg(deg === 0 ? 720 : 0)
    logo.current.style = `transform: rotate(${deg}deg)`
  }

  useEffect(() => {
    const historyUnsubscribe = globalHistory.listen(() => animateLogo());
    return () => historyUnsubscribe();
  });

  return (
    <Link to="/#home">
      <img
        ref={logo} 
        alt={logoAlt} 
        src={logoUrl}
        onClick={animateLogo}
        onLoad={animateLogo}
        sx={{
          display: 'block',
          width: '3em',
          filter: t => `drop-shadow(${t.shadows.darkSmallShadow})`,
          transition : 'transform 1s ease-in-out'
        }} 
      />
    </Link>
  );
}

export default Logo;