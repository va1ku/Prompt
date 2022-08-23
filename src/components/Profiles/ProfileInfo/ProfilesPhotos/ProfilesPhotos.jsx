import classes from "./ProfilesPhotos.module.css"
import avatar from "../../../../images/avatar.png"
import imgSetPhoto from "../../../../images/SetPhoto.png"
import { useState } from 'react';
import ProfileStatus from './../../ProfileStatus/ProfileStatus';

const ProfilesPhotos = ({ Profile, isOwner, PushPhoto, updateStatus, getStatus, status}) => {

	const dispatchAvatar = (e) => {
		PushPhoto(e.target.files[0])
	}
	const [editMode, setEditMode] = useState(false);

	return (
		<div className={classes.img_wrapper} onMouseOver={() => { setEditMode(true) }} onMouseOut={() => { setEditMode(false) }} >
			<img className={`${classes.avatar} ${editMode && isOwner ? classes.blur : null}`} src={Profile.photos.large || avatar} alt="" />
			{isOwner &&
				<div style={editMode ? { display: 'block' } : { display: 'none' }}>
					<img className={classes.SetPhoto} src={imgSetPhoto} alt="" ></img>
					<input type="file" className={classes.SetPhotoInput} onChange={dispatchAvatar}></input>
				</div>
			}
			<div className={classes.name} >
				<span> {Profile.fullName}</span>
			</div>
			<ProfileStatus 
			isOwner={isOwner}
			updateStatus={updateStatus} 
			getStatus={getStatus} 
			status={status}
			/>
		</div>
	)
};

export default ProfilesPhotos;