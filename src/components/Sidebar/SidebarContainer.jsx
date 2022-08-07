import { connect } from "react-redux";
import Sidebar from "./Sidebar";


let mapStateToProps = (state) =>({
	MainUserId : state.auth.MainUserId
})


export default connect(mapStateToProps,)(Sidebar);