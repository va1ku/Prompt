import { AddPost, DeletePost } from './profiles_reducer';
import profiles_reducer from './profiles_reducer';

const state = {
	posts: [{
		id: 1,
		text: "",
		fon: "",
		countLike: 0,
	}],
};

it("new post to be added", () =>{
	let action = AddPost("New post");
	let newState = profiles_reducer(state,action)
	
	expect(newState.posts.length).toBe(2);
})

it("new text must match",() =>{
	let action = AddPost("New post");
	let newState = profiles_reducer(state,action)

	expect(newState.posts[1].text).toBe("New post")
})

it("new post to be delete",() =>{
	let action = DeletePost(1)
	let newState = profiles_reducer(state,action)

	expect(newState.posts.length).toBe(0)
})