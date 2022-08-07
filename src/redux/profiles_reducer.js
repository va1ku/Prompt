import profilesAPI from "../api/profilesAPI";

const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"


const initializationState = {
	posts: [	],
	Profile: null,
	status: "",
};

const profiles_reducer = (state = initializationState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 1,
				text: action.post,
				fon: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg",
				countLike: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				NouPostsText: "",
			};

		case SET_PROFILE:
			return {...state, Profile: action.profile};

		case SET_STATUS:
			return {...state, status: action.status};

		case DELETE_POST:
			return {...state, posts: state.posts.filter((el)=> el.id !== action.id)}

		default:
			return state

	}
};



export let AddPost = (post) => ({ type: ADD_POST, post });
export let SetProfile = (profile) => ({type: SET_PROFILE, profile});
export let SetStatus = (status) => ({type: SET_STATUS, status});
export let DeletePost = (id) => ({type: DELETE_POST, id});


export const profileLoading = (userId) => (dispatch) =>{
	profilesAPI.profiles(userId)
		.then((data) =>{
			dispatch(SetProfile(data))
			dispatch(getStatus(userId))
		})
}

export const getStatus = (userId) => (dispatch) =>{
	profilesAPI.getStatus(userId)
		.then((response) =>{
			dispatch(SetStatus(response))
		})
}

export const updateStatus = (status) => (dispatch) =>{
	profilesAPI.updateStatus(status)
		.then((response) =>{
			if(response.resultCode === 0){
				dispatch(SetStatus(status))
			}
		})
}




export default profiles_reducer;