import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
// import Feed from "./Feed";
// import Header from "./Header";
import Login from "./Login";
// import Sidebar from "./Sidebar";
// import Widgets from "./Widgets";
import Main from "./Main";
import { useStateValue } from "./StateProvider";

function App() {
	// user login status check
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="app">
			<BrowserRouter>
				{/* {!user ? (
					<Route path="/" component={Login} />
				) : (
					<>
						<Route path="/main" component={Main} />
						<Redirect path="*" to="/main" />
					</>
				)} */}
				<Switch>
					<Route path="/main" component={Main} />
					<Route path="/" component={Login} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
