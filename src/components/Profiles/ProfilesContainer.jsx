import Profiles from "./Profiles"
import {AddPost,profileLoading,getStatus,updateStatus,PushPhoto} from "../../redux/profiles_reducer";
import { connect } from "react-redux";
import React from "react";
import { useParams,Navigate } from "react-router-dom";
import { compose } from "redux";
import {getNouPostsText, getPost, getProfile, getStateStatus } from "../../redux/profiles_selectors";
import { getMainUserId } from "../../redux/auth_selectors";
import { pushToNewProfile } from './../../redux/profiles_reducer';




class ProfilesAPI extends React.Component {

	state = {redirect: false}

	ProfileUpdate(){
		if(this.props.param.userId){
			this.props.profileLoading(this.props.param.userId)
		}else if(this.props.MainUserId){
			this.props.profileLoading(this.props.MainUserId)
		}else{
			this.setState({redirect: true});
		}
	}

	componentDidMount() {
		this.ProfileUpdate();
	}
	componentDidUpdate(prevProps,prevState){
		
		if(this.props.param.userId !== prevProps.param.userId || this.props.MainUserId !== prevProps.MainUserId){
			this.ProfileUpdate();
		}
	}

	render(){
		if(this.state.redirect === true){
			return <Navigate to="/login"/>
		}
		return (
			<Profiles {...this.props} isOwner={!this.props.param.userId} />
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
		Errors: state.profilePage.Errors
	}
}


export default compose(
	connect(mapStateToProps, {AddPost,profileLoading,getStatus,updateStatus,PushPhoto, pushToNewProfile}),
)(TakeParams)