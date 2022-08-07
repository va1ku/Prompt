import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {logout} from '../../redux/auth_reducer'
import { getMainUserId } from "../../redux/auth_selectors";


class HeaderContainer extends React.Component {

	render() {
		return (
			<Header {...this.props}/>
		)
	}
};


let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	fullName: state.auth.fullName,
	MainUserId: getMainUserId(state),
	isRequest: state.auth.isRequest
})
export default connect(mapStateToProps,{logout})(HeaderContainer);