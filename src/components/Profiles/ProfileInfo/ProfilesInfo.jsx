import Preloading from "../../Common/Preloading/Preloading";
import classes from "./ProfilesInfo.module.css"

const ProfilesInfo = (props) => {
	if(!props.Profile){
		return(
			<Preloading/>
		)
	}
	return (
		<div className={classes.ProfilesInfo}>
			<div className={classes.img_block}>
				<img className={classes.avatar} src={props.Profile.photos.large} alt="" />
				<div className={classes.name} >
					<span> {props.Profile.fullName}</span>
				</div>
			</div>
			<div className={classes.info}>
				dada
			</div>
		</div>
	)
};

export default ProfilesInfo;