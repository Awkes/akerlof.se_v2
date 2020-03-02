/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../Section';
import SocialMediaIcons from '../SocialMediaIcons';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressWpSite(title: {eq: "Home"}) {
        acf {
          heading
          subheading
        }
      }
    }
  `);
  const { wordpressWpSite: { acf: { heading, subheading }}} = data;
  return (
    <Section blank={true}>
      <div
        sx={{
          marginTop: ['auto'],
          marginBottom: [3],
          marginX: [4],
          textShadow: 'darkSmallShadow',
          textAlign: ['left', 'right'],
          paddingTop: [5, 7],
          paddingBottom: [3, 5],
          paddingX: [2, 5],
        }}
      >
        <h1 sx={{ 
          marginY: 0,
          wordSpacing: '100vw',
          fontSize: [4, 5],
          marginBottom: 1,
        }}>
          {heading}
        </h1>
        <h2 sx={{
          marginY: 0,
          color: 'primary',
          fontSize: [1, 3],
          marginBottom: 2,
        }}>
          {subheading}
        </h2>
        <SocialMediaIcons />
      </div>
    </Section>
  );
}

export default Home;