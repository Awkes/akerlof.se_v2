import React from "react";
import { graphql } from 'gatsby';
import { Global } from '@emotion/core';
import Layout from '../components/Layout';
import Section from '../components/Section';

export default ({
  data: { wordpressPage: { featured_media: { source_url: bgImg }}}
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
        <Section blank="true">
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
    wordpressPage(slug: {eq: "index"}) {
      featured_media {
        source_url
      }
    }
  }
`;