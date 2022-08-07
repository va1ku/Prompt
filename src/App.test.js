import { BrowserRouter } from "react-router-dom";
import store from "./redux/store_redux";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import React from 'react';
import App from './App';

test('renders learn react link', () => {
	const div = document.createElement('div');
	const root = ReactDOM.createRoot(div);
	root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>);
	root.unmount(div)
});
