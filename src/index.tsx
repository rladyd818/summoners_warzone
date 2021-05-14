import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import "./index.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<ReduxProvider store={store}>
				<App />
			</ReduxProvider>
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
