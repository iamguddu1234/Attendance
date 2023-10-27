import { useHistory } from "react-router-dom";

import classes from "./User.module.css";

import Images from "./p2.jpg";
import { BiEditAlt } from "react-icons/bi";

function User() {
  const history = useHistory();
  const contactPageHandler = () => {
    history.push("/UserDetails");
  };

  return (
    <button className={classes.mainData} onClick={contactPageHandler}>
      <div className={classes.nu}>1</div>
      <div className={classes.date}>30/12/2012</div>

      <div className={classes.name}>
        <img src={Images} className={classes.userPic}></img>
        <div className={classes.userName}>Sachin Ramesh Tendulkar</div>
      </div>
      <div className={classes.inTime}>12.00 Am</div>
      <div className={classes.outTime}>12.12 Am</div>

      <div className={classes.absent}>
        <div className={classes.a_text}>A</div>
      </div>

      <BiEditAlt className={classes.edit} />
    </button>
  );
}

export default User;
