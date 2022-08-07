import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css"

const Sidebar = (props) => {
	return (
		<nav className={classes.sidebar}>
			<ul className={classes.list}>
				{props.MainUserId
					?<ul>
					 	<li><NavLink to="/profile" className={({isActive}) => isActive ? `${classes.active}` : "" }>Profile</NavLink></li>
					 	<li><NavLink to="/dialogs" className={({isActive}) => isActive ? `${classes.active}` : "" }>Messages</NavLink></li>
					 </ul>
					:<li><NavLink to="/login" className={({isActive}) => isActive ? `${classes.active}` : "" }>Login</NavLink></li>
				}
				<li><NavLink to="/users" className={({isActive}) => isActive ? `${classes.active}` : "" }>Users</NavLink></li>
				<li><NavLink to="/news" className={({isActive}) => isActive ? `${classes.active}` : "" }>News</NavLink></li>
				<li><NavLink to="/music" className={({isActive}) => isActive ? `${classes.active}` : "" }>Music</NavLink></li>
				<li><NavLink to="/settings" className={({isActive}) => isActive ? `${classes.active}` : "" }>Settings</NavLink></li>
			</ul>
		</nav>
	)
};

export default Sidebar;