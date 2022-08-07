import { connect } from "react-redux";
import {
	PageActiveUpdate, SetUsers,AllUsersCountUpdate,
	LoadingUpdate, DisableButton,
	getUsers,followUser,
	unFollowUser,
} from "../../redux/users_reducer";
import React from "react";
import Users from "./Users";


/*constructor(props) {
	super(props);
}*/

class UsersAPI extends React.Component {


	componentDidMount() {
		if (this.props.users.length === 0) {
			this.props.getUsers(this.props.UsersPageCount, 1)
		}
	}

	onPageChanged = (count, page) => {
		this.props.getUsers(count, page)
		this.props.PageActiveUpdate(page)
	}


	render() {
		return (<><Users {...this.props} onPageChanged={this.onPageChanged}/></>)
	}
}

let mapStateToProps = (state) => {
	return {
		disableButtonID: state.usersPage.disableButtonID,
		UsersCountPage: state.usersPage.UsersCountPage,
		AllUsersCount: state.usersPage.AllUsersCount,
		PageActive: state.usersPage.PageActive,
		isLoading: state.usersPage.isLoading,
		users: state.usersPage.users
	}
}


const UsersContainer = connect(mapStateToProps,
	{
		SetUsers, AllUsersCountUpdate, PageActiveUpdate,
		LoadingUpdate, DisableButton, getUsers,followUser,unFollowUser
	})(UsersAPI);


export default UsersContainer;