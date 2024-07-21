//Side popup menu
//Male Female t-shirts shirts pants shorts coats dresses

import classes from "../styles/Menu.module.css";

export default function Menu(props) {
  return (
    <>
      <div className={classes.menu_inner} onClick={props.ChangePage}>
        Menu Component
      </div>
    </>
  );
}
