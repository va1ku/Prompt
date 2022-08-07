import Profiles from "./Profiles"
import {AddPost,profileLoading,getStatus,updateStatus} from "../../redux/profiles_reducer";
import { connect } from "react-redux";
import React from "react";
import { useParams,Navigate } from "react-router-dom";
import { compose } from "redux";
import {getNouPostsText, getPost, getProfile, getStateStatus } from "../../redux/profiles_selectors";
import { getMainUserId } from "../../redux/auth_selectors";



class ProfilesAPI extends React.Component {

	componentDidMount() {
		if(this.props.param.userId){
			this.props.profileLoading(this.props.param.userId)
		}else if(this.props.MainUserId){
			this.props.profileLoading(this.props.MainUserId)
		}
		

	}

	render(){
		if(!this.props.param.userId && !this.props.MainUserId){
			return <Navigate to="/login"/>
		}
		return (
			<Profiles {...this.props} />
		)
	}
}

const TakeParams = (props) => {

	return <ProfilesAPI {...props} param={useParams()} />

}


const mapStateToProps = (state) => {
	return {
		posts: getPost(state),
		NouPostsText: getNouPostsText(state),
		Profile: getProfile(state),
		status: getStateStatus(state),
		MainUserId: getMainUserId(state),
	}
}


export default compose(
	connect(mapStateToProps, {AddPost,profileLoading,getStatus,updateStatus}),
)(TakeParams)