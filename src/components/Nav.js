/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import NavLink from './NavLink';

const Nav = () => {
  const { wordpressWpApiMenusMenusItems: { items } } = useStaticQuery(graphql`
    query {
      wordpressWpApiMenusMenusItems(name: {eq: "Navigation"}) {
        items {
          title
          url
          wordpress_id
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
        {items.map(({ title, url, wordpress_id }) =>
          <li key={wordpress_id}>
            <NavLink url={url}>{title}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
