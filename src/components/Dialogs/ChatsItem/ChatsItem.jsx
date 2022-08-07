import { NavLink } from "react-router-dom";
import classes from "./ChatsItem.module.css";

const ChatsItem = (props) => {
	return (
		<div className={classes.ChatsItem}>
			<img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt="" />
			<NavLink to={"/dialogs/" + props.id} className={(navData) => navData.isActive ? `${classes.active}` : "" }>{props.name}</NavLink>
		</div>
	)
};

export default ChatsItem;