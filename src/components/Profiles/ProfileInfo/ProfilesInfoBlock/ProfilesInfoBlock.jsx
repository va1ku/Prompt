import classes from "./ProfilesInfoBlock.module.css"
import { useState } from 'react';
import Contacts from "./Contacts/Contacts";


const ProfilesInfoBlock = ({ isOwner, Profile, setEditMode }) => {

	const [switchContacts, SetSwitchContacts] = useState(false);
	const toggleSwitchContacts = () => { SetSwitchContacts(!switchContacts) }

	return <div className={classes.info}>
		<div className={classes.wrapper}>
			<div className={classes.items}>
				<div className={classes.InfoItem}> About Me: {Profile.aboutMe}</div>
				<div className={classes.InfoItem}>
					Looking for a job:  {Profile.lookingForAJob ? "yes" : "no"}
				</div>
				<div className={classes.InfoItem}>
					My Professional skills :  {Profile.lookingForAJobDescription}
				</div>
				<div className={classes.switched}>
					<button className={classes.SwitchButton} onClick={toggleSwitchContacts}></button>
				</div>
				{switchContacts
					? Object.keys(Profile.contacts).map(key => <Contacts key={key} messenger={key} contact={Profile.contacts[key]} />)
					: null
				}
			</div>
			{isOwner
			?<div><button onClick={() => {setEditMode(true)}}>Edit</button></div>
			: null
			}
		</div>
	</div>
}

export default ProfilesInfoBlock;