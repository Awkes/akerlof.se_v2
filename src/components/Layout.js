/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { Global } from "@emotion/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default({children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        datoCmsInformation {
          firstName
          lastName
          title
          title
          url
          backgroundImage {
            url
          }
        }
      }
    `
  );
  const info = data.datoCmsInformation;

  const styles = {
    global: theme => ({
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
        backgroundImage: `url(${info.backgroundImage.url})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      a: {
        color: theme.colors.primary,
        textDecoration: 'underline transparent',
        transition: 'ease-in 0.1s, ease-out 0.5s',
        '&:hover': { 
          textDecoration: `underline ${theme.colors.primary}`
        }
      }
    })
  }
  if (!Array.isArray(children)) { children = [children]; }
  return (
    <Fragment>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>{info.firstName+' '+info.lastName+' - '+info.title+' - '+info.url.split('://')[1]}</title>
        <meta name="description" content={info.description} />
      </Helmet>
      <Global styles={styles.global} />
      <Header/>
      <main>
        {children.map((child,i) => (
          <Section 
            key={i} 
            id={child.props.parentId} 
            children={child}
            blank={child.props.blank}
          />
        ))}
      </main>
      <Footer />
    </Fragment>
  );
}