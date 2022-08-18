import profilesAPI from './../api/profilesAPI';

const ADD_POST = "profile/ADD_POST";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST"
const PUSH_PHOTOS_SUCCESS = "profile/PUSH_PHOTOS_SUCCESS"


const initializationState = {
	posts: [],
	Profile: {
		photos: {
			small: null,
			large: null
		}
	},
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
			return { ...state, Profile: action.profile };

		case SET_STATUS:
			return { ...state, status: action.status };

		case DELETE_POST:
			return { ...state, posts: state.posts.filter((el) => el.id !== action.id) }

		case PUSH_PHOTOS_SUCCESS:
			return { ...state, Profile: { ...state.Profile, photos: action.photos } }

		default:
			return state

	}
};



export let AddPost = (post) => ({ type: ADD_POST, post });
export let SetProfile = (profile) => ({ type: SET_PROFILE, profile });
export let SetStatus = (status) => ({ type: SET_STATUS, status });
export let DeletePost = (id) => ({ type: DELETE_POST, id });
let PushPhotoSuccess = (photos) => ({ type: PUSH_PHOTOS_SUCCESS, photos })


export const profileLoading = (userId) => async (dispatch) => {
	const data = await profilesAPI.profiles(userId)
	dispatch(getStatus(userId))	
	dispatch(SetProfile(data))

}

export const getStatus = (userId) => async (dispatch) => {
	const response = await profilesAPI.getStatus(userId)
	dispatch(SetStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
	const response = await profilesAPI.updateStatus(status)
	if (response.resultCode === 0) {
		dispatch(SetStatus(status))
	}
}

export const PushPhoto = (file) => async (dispatch) => {
	const response = await profilesAPI.PushPhoto(file);
	if (response.resultCode === 0) {
		dispatch(PushPhotoSuccess(response.data.photos))
	}
}


export default profiles_reducer;