/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import HTMLReactParser from 'html-react-parser'
import Nav from './Nav';
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
  const { wordpressWpSite: { acf: { text } }} = useStaticQuery(graphql`
    query {
      wordpressWpSite(title: {eq: "Footer"}) {
        acf {
          text
        }
      }
    }
  `);

  return (
    <footer sx={{
      backgroundColor: 'footer',
      padding: 3,
      paddingBottom: 4,
      textAlign: 'center',
      borderTop: 'darkBorder',
      '&>nav': {
        display: 'inline-block',
        '&>ul>li': {
          display: ['initial', 'inline-block'],
          paddingX: [0, 3]
        }
      }
    }}>
      <Nav />
      <div sx={{ margin: 3 }}><SocialMediaIcons /></div>
      <div>{HTMLReactParser(text)}</div>
    </footer>
  );
}

export default Footer;