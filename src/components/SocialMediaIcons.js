/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

const SocialMediaIcons = () => {
  const { allWordpressWpSocialMedia: { nodes } } = useStaticQuery(graphql`
    query {
      allWordpressWpSocialMedia(sort: {fields: menu_order}) {
        nodes {
          wordpress_id
          title
          link
          icon {
            guid {
              source_url
            }
          }
        }
      }
    }
  `);

  const socialMediaIcons = nodes.map(node => ({
    id: node.wordpress_id,
    title: node.title,
    url: node.link,
    icon: node.icon.guid.source_url
  }))

  return (
    <div>
      {socialMediaIcons.map(({ id, title, url, icon }) => 
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          key={id}
          sx={{
            display: 'inline-block',
            width: '2em',
            marginX: 2,
            '&:first-of-type': { marginLeft: 0 },
            '&:last-of-type': { marginRight: 0 }
          }}
        >
          <img src={icon} alt={title} sx={{ display: 'block' }} />
        </a>
      )}
    </div>
  );
}

export default SocialMediaIcons;
