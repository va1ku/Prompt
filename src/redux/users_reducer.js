import followAPI from "../api/followAPI";
import usersAPI from "../api/usersAPI";
import { UpdateObjectInArray } from "../utils/object-helpers";

const ALL_USERS_COUNT_UPDATE = "users/ALL_USERS_COUNT_UPDATE";
const PAGE_ACTIVE_UPDATE = "users/PAGE_ACTIVE_UPDATE";
const SET_USERS = "users/SET_USERS";
const LOADING_UPDATE = "users/LOADING_UPDATE";
const DISABLE_BUTTON = "users/DISABLE_BUTTON"
const UN_FOLLOW = "users/UN_FOLLOW";
const FOLLOW = "users/FOLLOW";




const initializationState = {
	users: [],
	AllUsersCount: 0,
	UsersCountPage: 10,
	PageActive: 1,
	isLoading: false,
	disableButtonID: [],
}


const users_reducer = (state = initializationState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state, users: UpdateObjectInArray(state.users, "id", action.userId, { followed: true })
			}
		case UN_FOLLOW:
			return {
				...state, users: UpdateObjectInArray(state.users, "id", action.userId, { followed: false })
			}
		case SET_USERS:
			return { ...state, users: action.users }

		case ALL_USERS_COUNT_UPDATE:
			return { ...state, AllUsersCount: action.count }

		case PAGE_ACTIVE_UPDATE:
			return { ...state, PageActive: action.pageNumber }

		case LOADING_UPDATE:
			return { ...state, isLoading: action.isLoading }

		case DISABLE_BUTTON:
			return {
				...state,
				disableButtonID: action.isDisable
					? [...state.disableButtonID, action.id]
					: state.disableButtonID.filter(el => el !== action.id)

			}

		default:
			return state
	}
};



export const Follow = (userId) => ({ type: FOLLOW, userId });
export const UnFollow = (userId) => ({ type: UN_FOLLOW, userId });
export const SetUsers = (users) => ({ type: SET_USERS, users });
export const AllUsersCountUpdate = (count) => ({ type: ALL_USERS_COUNT_UPDATE, count });
export const PageActiveUpdate = (pageNumber) => ({ type: PAGE_ACTIVE_UPDATE, pageNumber });
export const LoadingUpdate = (isLoading) => ({ type: LOADING_UPDATE, isLoading })
export const DisableButton = (id, isDisable) => ({ type: DISABLE_BUTTON, id, isDisable })



export const getUsers = (UsersCount, PageNumber) => {
	return async (dispatch) => {
		dispatch(LoadingUpdate(true));
		const data = await usersAPI.getUsers(UsersCount, PageNumber)
		dispatch(AllUsersCountUpdate(data.totalCount))
		dispatch(SetUsers(data.items))
		dispatch(LoadingUpdate(false))
	}
}

async function followUnFollowFlow(dispatch, APImethod, actionCreator, userID) {
	dispatch(DisableButton(userID, true));
	const response = await APImethod(userID)
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userID))
		dispatch(DisableButton(userID, false))
	}
}

export const followUser = (userID) => {
	return async (dispatch) => {
		followUnFollowFlow(dispatch, followAPI.follow.bind(followAPI), Follow, userID)
	}
}

export const unFollowUser = (userID) => {
	return async (dispatch) => {
		followUnFollowFlow(dispatch, followAPI.unFollow.bind(followAPI), UnFollow, userID)
	}
}



export default users_reducer;

