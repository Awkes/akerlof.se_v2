/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <Fragment>
    <Global 
      styles={ theme => ({
        '*': { boxSizing: 'border-box' },
        html: {
          height: '100%',
          scrollBehavior: 'smooth'
        },
        body: {
          margin: 0,
          color: theme.colors.body,
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes[0],
          backgroundColor: theme.colors.background,
        },
        a: {
          color: theme.colors.primary,
          textDecoration: 'underline transparent',
          transition: 'ease-in 0.1s, ease-out 0.5s',
          '&:hover': { 
            textDecoration: `underline ${theme.colors.primary}`
          }
        },
        'h1,h2': { 
          fontFamily: theme.fonts.heading, 
          fontWeight: theme.fontWeights.heading,
          textTransform: 'uppercase',
          lineHeight: '1em',
          marginTop: theme.space[0],
          marginX: theme.space[0],
          marginBottom: theme.space[3],
        },
        h1: { fontSize: theme.fontSizes[4] },
        h2: { fontSize: theme.fontSizes[3] }
      })}
    />
    <Header/>
    <main>
      {children}
    </main>
    <Footer />
  </Fragment>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}