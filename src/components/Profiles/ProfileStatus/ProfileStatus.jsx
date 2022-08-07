import React,{useState, useEffect} from "react";
import styles from "./ProfileStatus.module.css";



const ProfileStatus = React.memo((props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, statusUpdate] = useState(props.status);
	const editModeToggle = () => {
		setEditMode(!editMode)
		if (editMode) {
			props.updateStatus(status)
		}
	}
	const statusTextUpdate = (e) => {
		statusUpdate(e.target.value)
	}
	useEffect(() => {
		statusUpdate(props.status)
	}, [props.status])

	return (
		<div className={styles.statusWrapper}>

			{!editMode &&
				<div className={styles.statusBlock}>
					<div onDoubleClick={editModeToggle} className={styles.status}>
						{props.status}
					</div>
				</div>}


			{editMode &&
				<div className={styles.changeStatusBlock}>
					<input onChange={statusTextUpdate}
						role="input"
						maxLength="300"
						onBlur={editModeToggle}
						value={status}
						autoFocus className={styles.changeStatus} type="text" />
				</div>}

		</div>
	)
});


export default ProfileStatus;
