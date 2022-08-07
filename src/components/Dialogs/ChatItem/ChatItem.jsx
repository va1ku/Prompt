import classes from "./ChatItem.module.css";

const ChatItem = (props) =>{
	return(
		<div className={classes.ChatItem}>
			<div className={classes.text}>
				{props.text}
			</div>
		</div>
	)
};

export default ChatItem;