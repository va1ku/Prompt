import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import {AddMessages } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) =>{
	return {
		dialogsData: state.dialogsPage.dialogsData,
		Chats: state.dialogsPage.Chats,
		ChatsText: state.dialogsPage.ChatsText,
	}
}

export default compose(
	connect(mapStateToProps,{AddMessages}),
	WithAuthRedirect
	)(Dialogs)

