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

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const pwRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

function Login() {
	// const [state, dispatch] = useStateValue();
	const [modalOpen, setModalOpen] = useState(false);
	const [modalOpen2, setModalOpen2] = useState(false);
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [nick, setNick] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [idState, setIdState] = useState(false);
	const [pwState, setPwState] = useState(false);
	const [idHelperTxt, setIdHelperTxt] = useState("");
	const [pwHelperTxt, setPwHelperTxt] = useState("");
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

	// 회원가입 api
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
				if (res.status === 200) {
					closeModal();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id, pw, nick]);

	// 로그인 api
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
				if (res.status === 200) {
					history.push("/main");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id, pw]);

	// 아이디와 비밀번호 유효성 체크
	const validator = useCallback(() => {
		setIdState(!emailRegex.test(id));
		if (id === "" || idState === true)
			setIdHelperTxt("유효하지 않은 Email형식입니다.");
		else setIdHelperTxt("");

		setPwState(!pwRegex.test(pw));
		if (pw === "" || pwState === true)
			setPwHelperTxt("8자 이상, 하나 이상의 문자 및 숫자를 조합해주세요.");
		else setPwHelperTxt("");

		return idState == true && pwState == true;
	}, [id, pw]);

	const inputChange =
		(setValue: () => {}) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setBtnDisabled(validator());
			setValue(event.target.value);
		};
	return (
		<>
			<div className="login">
				<div className="login__logo">
					<img src="./images/main.svg" alt="" />
					<h1>Welcome to Summoners warzone</h1>
					{/* <h1>{count}</h1>
					<button onClick={() => dispatch(incrementAction(5))}>countup</button>
					<button onClick={() => dispatch(decrementAction(5))}>
						countdown
					</button> */}
				</div>
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
							helperText={idHelperTxt}
							error={id === "" ? false : idState}
						></TextField>
						<TextField
							label="Password"
							type="password"
							onChange={inputChange(setPw)}
							helperText={pwHelperTxt}
							error={pw === "" ? false : pwState}
						></TextField>
						<TextField
							label="Nickname"
							onChange={inputChange(setNick)}
						></TextField>
						<Button type="submit" onClick={signUp} disabled={btnDisabled}>
							Submit
						</Button>
					</div>
				</Modal>
				<Modal2 open={modalOpen2} close={closeModal} header="Sign In">
					<div className="signin__form">
						<TextField
							label="Id"
							onChange={inputChange(setId)}
							helperText={idHelperTxt}
							error={id === "" ? false : idState}
						></TextField>
						<TextField
							label="Password"
							type="password"
							error={pw === "" ? false : pwState}
							helperText={pwHelperTxt}
							onChange={inputChange(setPw)}
						></TextField>
						<Button type="submit" onClick={signIn} disabled={btnDisabled}>
							Login
						</Button>
					</div>
				</Modal2>
			</div>
		</>
	);
}

export default Login;
