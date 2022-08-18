import authAPI from "../api/authAPI";
import profilesAPI from "../api/profilesAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_LOGIN_ERRORS = 'auth/SET_LOGIN_ERRORS';
const SET_PROFILE = 'auth/SET_PROFILE';



const initialState = {
	MainUserId: null,
	email: null,
	Profile: {
		photos: {
			small: null,
			large: null
		}
	},
	fullName: null,
	isAuth: false,
	LoginErrors: [],
};

const auth_reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			};
		case SET_LOGIN_ERRORS:
			return {
				...state,
				LoginErrors: [...action.messages]
			}

		case SET_PROFILE:
			return { ...state, Profile: action.profile };

		default:
			return state

	}
};



let setUserData = (MainUserId, email, fullName, isAuth) => ({ type: SET_USER_DATA, data: { MainUserId, email, fullName, isAuth } });
let setLoginErrors = (messages) => ({ type: SET_LOGIN_ERRORS, messages });
let SetProfile = (profile) => ({ type: SET_PROFILE, profile });



export const authorization = () => async (dispatch) => {
	const data = await authAPI.auth()
	if (data.resultCode === 0) {
		const { email, id, login, } = data.data;
		const profile = await profilesAPI.profiles(id)
		debugger
		dispatch(SetProfile(profile));
		dispatch(setUserData(id, email, login, true));
	}
}

export const login = (email, password, rememberMe) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe)
	if (response.resultCode === 0) {
		dispatch(setLoginErrors(""))
		dispatch(authorization())
	} else { dispatch(setLoginErrors(response.messages)) }
}

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(setUserData(null, null, null, false))
	}
}




export default auth_reducer;