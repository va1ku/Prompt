import authAPI from "../api/authAPI";
import profilesAPI from "../api/profilesAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_LOGIN_ERRORS = 'auth/SET_LOGIN_ERRORS';
const SET_PROFILE = 'auth/SET_PROFILE';
const SET_CAPTCHA_SUCCESS = 'auth/SET_CAPTCHA_SUCCESS'



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
	captcha: null //null because it is not always required
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

		case SET_CAPTCHA_SUCCESS:
			return { ...state, captcha: action.captcha }

		default:
			return state

	}
};



let setUserData = (MainUserId, email, fullName, isAuth, captcha) => ({ type: SET_USER_DATA, data: { MainUserId, email, fullName, isAuth, captcha } });
let setLoginErrors = (messages) => ({ type: SET_LOGIN_ERRORS, messages });
let SetProfile = (profile) => ({ type: SET_PROFILE, profile });
let SetCaptchaSuccess = (captcha) => ({ type: SET_CAPTCHA_SUCCESS, captcha });



export const authorization = () => async (dispatch) => {
	const data = await authAPI.auth()
	if (data.resultCode === 0) {
		const { email, id, login, } = data.data;
		const profile = await profilesAPI.profiles(id)
		dispatch(SetProfile(profile));
		dispatch(setUserData(id, email, login, true));
	}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.resultCode === 0) {
		dispatch(setLoginErrors(""))
		dispatch(authorization())
	} else {
		if (response.resultCode === 10) {
			dispatch(getCaptcha());
		}
		dispatch(setLoginErrors(response.messages))
	}
}

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(setUserData(null, null, null, false, null))
	}
}

export const getCaptcha = () => async (dispatch) => {
	const response = await authAPI.getCaptcha()
	dispatch(SetCaptchaSuccess(response.url))
}




export default auth_reducer;