import dialogs_reducer, { AddMessages } from "./dialogs_reducer";


const state = {
	Chats: [
		{ id:1, text: "dialog i te tet te" },
		{ id:2, text: "dialog i te te tet 2" },
		{ id:3, text: "dialog i te te tet 3" },
		{ id:4, text: "dialog i te te tet 4" },
	],
};

let action = AddMessages("New message");

it("new message to be added", () =>{
	
	let newState = dialogs_reducer(state,action)

	expect(newState.Chats.length).toBe(5);
})

it('new text must match', () =>{
	
	let newState = dialogs_reducer(state,action)

	expect(newState.Chats[4].text).toBe("New message");
})

