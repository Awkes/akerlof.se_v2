import React from "react";
import { graphql } from 'gatsby';
import { Global } from '@emotion/core';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Index = ({
  data: { 
    wordpressSiteMetadata: { name, description, home },
    wordpressWpSite: { acf: { background_image: { source_url: bgImg } }}
  }
}) => {
  const url = new URL(home);
  return (
    <>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>{name} - {url.hostname+(url.pathname !== '/' ? url.pathname : '')}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Global styles={{
        body: {
          backgroundImage: `url(${bgImg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
      }} />
      <Layout>
        <Section blank={true}>
          INNEHÅLL!
        </Section>
        <Section>
          INNEHÅLL!
        </Section>
        <Section>
          INNEHÅLL!
        </Section>
      </Layout>
    </>
  );
}

export default Index;

Index.propTypes = {
  data: PropTypes.object.isRequired
}

export const query = graphql`
  query {
    wordpressSiteMetadata {
      description
      name
      home
    }
    wordpressWpSite(title: {eq: "Settings"}) {
      acf {
        background_image {
          source_url
        }
      }
    }
  }
`;

