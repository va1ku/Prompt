import classes from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={classes.Post}>
			<div className={classes.block}>
				<img className={classes.img} src={props.fon} alt=""/>
				<div className={classes.item}>
					{props.text}
				</div>
				<div className={classes.countLike}>
				{props.countLike}
			 	</div>
			</div>
			
		</div>
	)
};

export default Post;