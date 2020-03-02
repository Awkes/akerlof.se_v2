/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from 'prop-types'

const Section = ({ children, blank }) => (
  <section sx={
    () => {
      const conditionalStyles = blank
        ? { backgroundColor: 'transparent' }
        : {
          '&:nth-of-type(odd)': { backgroundColor: 'background' },
          '&:nth-of-type(even)': { backgroundColor: 'backgroundS' },
          '&::after': {
            content: '""',
            height: '1em',
            borderTop: '1px solid',
            borderColor: 'primary',
            marginTop: '1em'
          }
        }
      ;
      return ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        overflow: 'hidden',
        ...conditionalStyles
      });
    }
  }>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  blank: PropTypes.bool
}

Section.defaultProps = {
  blank: false,
}