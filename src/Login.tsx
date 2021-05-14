import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./Login.css";
// import { auth, provider } from "./firebase";
// import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Modal from "./Modal";
import Modal2 from "./Modal";
import { post } from "./utils/httpHandle.ts";
import { useHistory, Redirect } from "react-router-dom";
import { useStore, useDispatch, useSelector } from "react-redux";
import { countSelector, incrementAction, decrementAction } from "./store";

function Login() {
	// const [state, dispatch] = useStateValue();
	const [modalOpen, setModalOpen] = useState(false);
	const [modalOpen2, setModalOpen2] = useState(false);
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [nick, setNick] = useState("");
	const history = useHistory();
	const count = useSelector(countSelector);
	const dispatch = useDispatch();
	const openModal = useCallback(
		(setModal) => () => {
			setModal(true);
		},
		[]
	);
	const closeModal = useCallback(() => {
		setModalOpen(false);
		setModalOpen2(false);
	}, []);

	// 값들을 보고 변하게 해줌
	// const title = useMemo(() => {
	// 	return id + pw;
	// }, [id, pw]);

	const signUp = useCallback(async () => {
		post({
			url: "/users/signup",
			body: {
				user_id: id,
				password: pw,
				name: nick,
			},
		})
			.then((res) => {
				history.push("/main");
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id, pw, nick]);

	const signIn = useCallback(async () => {
		post({
			url: "/users/signin",
			body: {
				user_id: id,
				password: pw,
				// name: nick,
			},
		})
			.then((res) => {
				history.push("/main");
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id, pw]);

	const inputChange =
		(setValue: () => {}) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValue(event.target.value);
		};
	// const signIn = () => {
	// 	// sign in...
	// 	auth
	// 		.signInWithPopup(provider)
	// 		.then((result) => {
	// 			console.log("결과", result);
	// 			dispatch({
	// 				type: actionTypes.SET_USER,
	// 				user: result.user,
	// 			});
	// 		})
	// 		.catch((err) => alert(err.message));
	// };
	return (
		<>
			<div className="login">
				<div className="login__logo">
					<img className="login__main" src="./images/main.png" alt="" />
					{/* <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" /> */}
					<h1>Welcome to Summoners warzone</h1>
					<h1>{count}</h1>
					<button onClick={() => dispatch(incrementAction(5))}>countup</button>
					<button onClick={() => dispatch(decrementAction(10))}>
						countdown
					</button>
				</div>
				{/* <Button type="submit" onClick={signIn}>
					Sign In
				</Button> */}
				<div>
					<h4>
						계정 정보를 가지고 계신가요?
						<a id="signin" onClick={openModal(setModalOpen2)}>
							Sign In
						</a>
					</h4>
				</div>
				<Button type="submit" onClick={openModal(setModalOpen)}>
					Sign Up
				</Button>
				<Modal open={modalOpen} close={closeModal} header="Sign Up">
					<div className="signup__form">
						<TextField
							label="Id"
							onChange={inputChange(setId)}
							value={id}
						></TextField>
						<TextField
							label="Password"
							onChange={inputChange(setPw)}
						></TextField>
						<TextField
							label="Nickname"
							onChange={inputChange(setNick)}
							value={nick}
						></TextField>
						<Button type="submit" onClick={signUp}>
							Submit
						</Button>
					</div>
				</Modal>
				<Modal2 open={modalOpen2} close={closeModal} header="Sign In">
					<div className="signin__form">
						<TextField
							label="Id"
							onChange={inputChange(setId)}
							value={id}
						></TextField>
						<TextField
							label="Password"
							onChange={inputChange(setPw)}
							value={pw}
						></TextField>
						<Button type="submit" onClick={signIn}>
							Login
						</Button>
					</div>
				</Modal2>
			</div>
		</>
	);
}

export default Login;
