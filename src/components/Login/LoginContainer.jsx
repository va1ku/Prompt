import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer.js";


const mapStateToProps = (state) =>{
	return{
		isAuth: state.auth.isAuth,
		LoginErrors: state.auth.LoginErrors,
	}
};


export default connect(mapStateToProps,{login})(Login)