import { NavLink } from "react-router-dom";
import styles from "./Users.module.css"
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {
	return (
		<div>
			<Paginator
				onPageChanged={props.onPageChanged}
				itemsCountPage={props.UsersCountPage}
				totalItemsCount={props.AllUsersCount}
				PageActive={props.PageActive}
				isLoading={props.isLoading}
			/>
			{props.users.map(
				(el) => {
					return (
						<div key={el.id} className={styles.wrapper}>
							<div className={styles.container}>
								<div className={styles.avatar_followed}>
									<NavLink to={"/profile/" + el.id}>
										<img className={el.photos.large ? styles.avatar : styles.avatarDefault} src={el.photos.large} alt=""></img>
									</NavLink>
									<div className={styles.followed}>
										{el.followed
											? <button disabled={props.disableButtonID.some(id => id === el.id)} className={styles.but_unFollow} 
											onClick={() => { props.unFollowUser(el.id) }}>UnFollow</button>
											: <button disabled={props.disableButtonID.some(id => id === el.id)} className={styles.but_follow} 
											onClick={() => { props.followUser(el.id) }}>Follow</button>
										}
									</div>
								</div>
							</div>
							<div className={styles.info}>
								<div className={styles.name}>{el.name}</div>
								<div className={styles.status}>{el.status}</div>
							</div>
						</div>
					)
				}
			)}
		</div>
	)
}



export default Users;