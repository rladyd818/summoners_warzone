import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "./components/Menu";

// import { useStateValue } from "./StateProvider";

function Header() {
	// const [{ user }, dispatch] = useStateValue();

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://djf7qc4xvps5h.cloudfront.net/game/cover/resize/3-2331-48.webp?ver=2020.04.02.12.01.13"
					alt=""
				/>
				<div className="header__input">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>

			<div className="header__center">
				<div className="header__option header__option--active">
					<h4 className="header__menu">menu1</h4>
				</div>
				<div className="header__option header__option--active">
					<h4 className="header__menu">menu2</h4>
				</div>
				<div className="header__option header__option--active">
					<h4 className="header__menu">menu3</h4>
				</div>
				<div className="header__option header__option--active">
					<h4 className="header__menu">menu4</h4>
				</div>
				<div className="header__option header__option--active">
					<h4 className="header__menu">menu5</h4>
				</div>
			</div>

			<div className="header__right">
				<div className="header__info">
					{/* <Avatar src={user.photoURL} /> */}
					{/* <h4>{user.displayName}</h4> */}
					{/* <Avatar src={""} /> */}
				</div>
				<Menu />
			</div>
		</div>
	);
}

export default Header;
