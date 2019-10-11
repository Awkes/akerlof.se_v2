/** @jsx jsx */
import { jsx } from "theme-ui";

export default({children, blank=false}) => {
  const styles = {
    section: blank => {
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
        console.log(conditionalStyles)
      return({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        p: '5em 1em 0 1em',
        overflow: 'hidden',
        ...conditionalStyles
      });
    }
  }
  return (
    <section sx={styles.section(blank)}>
      {children}
    </section>
  );
}