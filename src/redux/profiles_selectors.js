import { createSelector } from 'reselect'

export const getPost = (state) =>{
	return state.profilePage.posts
}

export const getNouPostsText = (state) =>{
	return state.profilePage.NouPostsText
}

export const getProfile = (state) =>{
	return state.profilePage.Profile
}

export const getStateStatus = (state) =>{
	return state.profilePage.status
}





