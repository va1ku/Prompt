import ProfilesInfo from "./ProfileInfo/ProfilesInfo";
import NouPosts from "./NouPosts/NouPosts";
import Post from "./Post/Post";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const Profiles = (props) => {
	
	const postElement = props.posts.map(p => <Post key={p.id} text={p.text} fon={props.Profile.photos.small} countLike={p.countLike} />)

	return (
		<main >
			<ProfilesInfo Profile={props.Profile} isOwner={props.isOwner} PushPhoto={props.PushPhoto}/>
			<ProfileStatus 
			isOwner={props.isOwner}
			updateStatus={props.updateStatus} 
			getStatus={props.getStatus} 
			status={props.status}
			/>
			<NouPosts useUpdateText={props.UpdatePostText}
				addPost={props.AddPost}
				NouPostsText={props.NouPostsText}
			/>
			{postElement}
		</main>
	)
};

export default Profiles;