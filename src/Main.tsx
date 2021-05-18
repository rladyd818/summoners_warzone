import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function Main() {
	return (
		<>
			<Header />

			<div className="app__body">
				<Sidebar />
				{/* <Feed /> */}
				{/* <Widgets /> */}
			</div>
		</>
	);
}

export default Main;
