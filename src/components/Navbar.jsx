import Menu from "./Menu";
import Login from "../pages/Login";
import classes from "../styles/Navbar.module.css";

export default function Navbar(props) {
  return (
    <>
      <div className={classes.nav}>
        <Menu className={classes.menu_outter} ChangePage={props.ChangePage} />
        <div className={classes.logoname}>Hungaro</div>
        <Login className={classes.login} />
      </div>
    </>
  );
}
