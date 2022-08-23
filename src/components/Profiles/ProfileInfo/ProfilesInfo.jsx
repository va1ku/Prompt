import Preloading from "../../Common/Preloading/Preloading";
import classes from "./ProfilesInfo.module.css"
import ProfilesInfoBlock from "./ProfilesInfoBlock/ProfilesInfoBlock";
import ProfilesPhotos from "./ProfilesPhotos/ProfilesPhotos";
import { useState } from 'react';
import ProfilesInfoForm from './ProfilesInfoForm/ProfilesInfoForm';

const ProfilesInfo = ({ Profile, isOwner, PushPhoto, status, getStatus, updateStatus, pushToNewProfile, Errors}) => {
	

	const [editMode, setEditMode] = useState(false);

	if (!Profile) {
		return (
			<Preloading />
		)
	}
	return (
		<div>
			<div className={classes.ProfilesInfo}>
				<ProfilesPhotos Profile={Profile} isOwner={isOwner} PushPhoto={PushPhoto}
				 updateStatus={updateStatus} getStatus={getStatus} status={status} />
				 {editMode 
				 ? <ProfilesInfoForm Errors={Errors} setEditMode={setEditMode} Profile={Profile} pushToNewProfile={pushToNewProfile}/>
				 :<ProfilesInfoBlock Profile={Profile} isOwner={isOwner} setEditMode={setEditMode}/>
				 }
			</div>
		</div>
	)
};


export default ProfilesInfo;