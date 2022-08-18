import Preloading from "../../Common/Preloading/Preloading";
import classes from "./ProfilesInfo.module.css"
import avatar from "../../../images/avatar.png"
import imgSetPhoto from "../../../images/SetPhoto.png"
import { useState } from 'react';

const ProfilesInfo = ({ Profile, isOwner,PushPhoto }) => {

	const dispatchAvatar = (e) => {
		PushPhoto(e.target.files[0])
	}
	
	const [switched, SetSwitched] = useState(false);
	const [visibility, SetVisibility] = useState(false);

	const toggleSwitched = () => {SetSwitched(!switched)}
	const visibilityToggle = (is) => {SetVisibility(is)}

	if (!Profile) {
		return (
			<Preloading />
		)
	}
	return (
		<div>
			<div className={classes.ProfilesInfo}>
				<div className={classes.img_block}onMouseOver={() => { visibilityToggle(true) }} onMouseOut={() => { visibilityToggle(false) }} >

					<img className={`${classes.avatar} ${visibility && isOwner ? classes.blur : null}`} src={Profile.photos.large || avatar} alt="" />
					{isOwner &&
					<div style={visibility ? {display: 'block'} : {display: 'none'}}>
						<img className={classes.SetPhoto} src={imgSetPhoto} alt="" ></img>
						<input type="file" className={classes.SetPhotoInput} onChange={dispatchAvatar}></input>
					</div>}

				</div>

				<div className={classes.info}>
					<div className={classes.infoWrapper}>
						<div className={`${classes.aboutMe} ${isOwner ? classes.aboutMeOwner : null} `}>{Profile.aboutMe ? Profile.aboutMe : "расскажите о себе"}</div>
						<div className={classes.switched}>
							<button className={classes.SwitchButton} onClick={toggleSwitched}></button>
						</div>
						{switched
							? <div className={classes.contactsWrapper}>
								<ul>
									<li>facebook: {Profile.contacts.facebook ? Profile.contacts.facebook : "not specified"}</li>
									<li>github: {Profile.contacts.github ? Profile.contacts.github : "not specified"}</li>
									<li>instagram:{Profile.contacts.instagram ? Profile.contacts.instagram : "not specified"} </li>
									<li>mainLink: {Profile.contacts.mainLink ? Profile.contacts.mainLink : "not specified"}</li>
									<li>twitter: {Profile.contacts.twitter ? Profile.contacts.twitter : "not specified"}</li>
									<li>vk: {Profile.contacts.vk ? Profile.contacts.vk : "not specified"}</li>
									<li>website: {Profile.contacts.website ? Profile.contacts.website : "not specified"}</li>
									<li>youtube: {Profile.contacts.youtube ? Profile.contacts.youtube : "not specified"}</li>
								</ul>
							</div>
							: null
						}
					</div>
				</div>

			</div>
			<div className={classes.name} >
				<span> {Profile.fullName}</span>
			</div>

		</div>
	)
};

export default ProfilesInfo;