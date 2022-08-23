import classes from "./Contacts.module.css"



const Contacts = ({ messenger, contact }) => (<>
	<div className={classes.contacts}>{messenger} : {contact}</div>
</>)

export default Contacts;