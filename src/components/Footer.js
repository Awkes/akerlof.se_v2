/** @jsx jsx */
import { jsx } from "theme-ui";
import Nav from "../components/Nav";

export default({children}) => (
  <footer sx={{backgroundColor: 'footer'}}>
    <Nav /*className={styles.nav}*/ />

    <div>
      Copyright &copy; Andreas Åkerlöf 2019
    </div>
  </footer>
);