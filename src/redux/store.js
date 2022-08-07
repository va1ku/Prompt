import profiles_reducer from "./profiles_reducer";
import dialogs_reducer from "./dialogs_reducer";


const store = {
	_state : {
		profilePage: {
			posts:[{text:"da da", number:1, fon: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg", countLike: 10},{text:"da da", number:2, fon: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg", countLike: 15},{text:"da da", number:3, fon: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg", countLike: 11},],
			NouPostsText: "",

		},
		dialogsPage: {
			dialogsData: [{id: 1},{id: 2}, {id: 3},{id: 4},{id: 5},{id: 6}],
			Chats: [{text: "dialog i te tet te"},{text: "dialog i te te tet 2"},{text: "dialog i te te tet 3"},{text: "dialog i te te tet 4"},],
			ChatsText: "",
		},
	},
	getState(){
		return this._state
	},
	
	subscribe(observer) {
		this._rerender = observer
	},
	_rerender() {

	},

	dispatch(action){
		this._state.profilePage = profiles_reducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);
		this._rerender(this._state);
	},
	
};



export default store;