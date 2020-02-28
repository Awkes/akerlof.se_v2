/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import NavLink from './NavLink';

const Nav = () => {
  const { 
    wordpressWpSite: { 
      acf: { about, blog, contact, experience, projects } 
    } 
  } = useStaticQuery(graphql`
    query {
      wordpressWpSite(title: {eq: "Menu labels"}) {
        acf {
          about
          experience
          projects
          contact
          blog
        }
      }
    }
  `);

  return (
    <nav>
      <ul
        sx={{
          listStyleType: 'none',
          width: '100%',
          margin: 0,
          padding: 0,
          textTransform: 'uppercase',
        }}
      >
        <li><NavLink url="/#about">{about}</NavLink></li>
        <li><NavLink url="/#experience">{experience}</NavLink></li>
        <li><NavLink url="/#projects">{projects}</NavLink></li>
        <li><NavLink url="/#contact">{contact}</NavLink></li>
        <li><NavLink url="/#blog">{blog}</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
