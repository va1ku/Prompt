import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfilesContainer from './components/Profiles/ProfilesContainer.jsx'
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import { connect } from "react-redux";
import { appAuthorization } from "./redux/app_reducer";
import Preloading from './components/Common/Preloading/Preloading';
import { useEffect } from 'react';
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))




const App = (props) => {
	
	useEffect(() => {
		props.appAuthorization()
	}, [])


	if (!props.authorized) {
		return <Preloading />
	}
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<SidebarContainer />
			<div className='app-wrapper-main'>
				<Routes>
					<Route path='/profile' element={<ProfilesContainer />} >
						<Route path=':userId' element={<ProfilesContainer />} />
					</Route>
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/login' element={<Suspense fallback={<div>Загрузка...</div>}> <LoginContainer /> </Suspense>} />
					<Route path='/users/*' element={<Suspense fallback={<div>Загрузка...</div>}> <UsersContainer /> </Suspense>} />
					<Route path='/news' element={<News />} />
					<Route path='/music' element={<Music />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)


};

let mapStateToProps = (state) => (
	{
		authorized: state.app.authorized
	}
)



export default connect(mapStateToProps, { appAuthorization })(App);

