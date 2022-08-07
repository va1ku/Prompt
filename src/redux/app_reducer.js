import { authorization } from "./auth_reducer";

const AUTHORIZED = 'app/AUTHORIZED';

const initialState = {
	authorized: false,
}



const app_reducer = (state = initialState, action) => {
	switch (action.type) {

		case AUTHORIZED:
			return {
				...state,
				authorized: true
			}

		default:
			return state
	}
}


let authorized = () => ({ type: AUTHORIZED });



export const appAuthorization = () => (dispatch) => {
	let promise = dispatch(authorization())
	Promise.all([promise]).then(() =>
		dispatch(authorized())
	)
}


export default app_reducer;