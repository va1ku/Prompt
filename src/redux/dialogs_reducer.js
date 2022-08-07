const ADD_MESSAGES = "dialogs/ADD_MESSAGES";

const initialState = {
	dialogsData: [
		{ id: 1, name: "Vasilii" },
		{ id: 2, name: "Ivan" },
		{ id: 3, name: "Dmitri" },
		{ id: 4, name: "Vitaly" },
		{ id: 5, name: "Svetlana" },
		{ id: 6, name: "Elena" }
	],
	Chats: [
		{ id:1, text: "dialog i te tet te" },
		{ id:2, text: "dialog i te te tet 2" },
		{ id:3, text: "dialog i te te tet 3" },
		{ id:4, text: "dialog i te te tet 4" },
	],
};

const dialogs_reducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_MESSAGES:
			const newMessages = {
				id: 5,
				text: action.message,
			};
			return{ 
				...state,
				Chats: [...state.Chats, newMessages],
			 };

		default:
			return state

	}
};


export let AddMessages = (message) => ({ type: ADD_MESSAGES , message});




export default dialogs_reducer;