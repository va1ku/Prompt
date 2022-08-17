import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) =>{
	debugger
	return(
		<header className={styles.header}>
				{props.isAuth 
				? <div className={styles.wrapper} >
						<img className={styles.logo} src={props.photos.small}></img>
					<div className={styles.name}>{props.fullName}</div>
					<button onClick={props.logout}>Logout</button>
				</div>
				: <div>
					<NavLink to="/Login">Login</NavLink>
				</div>
				}
				
		</header>
	)
};

export default Header;