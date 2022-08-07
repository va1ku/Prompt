import authAPI from "../api/authAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_LOGIN_ERRORS = 'auth/SET_LOGIN_ERRORS';



const initialState = {
	MainUserId: null,
	email: null,
	fullName: null,
	isAuth: false,
	profile: {
		photos: {
			small: null,
			large: null
		}
	},
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

		default:
			return state

	}
};



let setUserData = (MainUserId, email, fullName, isAuth) => ({ type: SET_USER_DATA, data: { MainUserId, email, fullName, isAuth } });
let setLoginErrors = (messages) => ({ type: SET_LOGIN_ERRORS, messages });



export const authorization = () => async (dispatch) => {
	const data = await authAPI.auth()
	if (data.resultCode === 0) {
		const { email, id, login, } = data.data;
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

export const logout = () => async(dispatch) => {
	const response = await authAPI.logout()
		if (response.resultCode === 0) {
			dispatch(setUserData(null, null, null, false))
		}
}




export default auth_reducer;