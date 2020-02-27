import React from "react";
import { graphql } from 'gatsby';
import { Global } from '@emotion/core';
import Layout from '../components/Layout';
import Section from '../components/Section';

export default ({
  data: { wordpressWpSite: { acf: { background_image: { source_url: bgImg } }}}
}) => (
    <>
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

export const query = graphql`
  query {
    wordpressWpSite(title: {eq: "Settings"}) {
      acf {
        background_image {
          source_url
        }
      }
    }
  }
`;