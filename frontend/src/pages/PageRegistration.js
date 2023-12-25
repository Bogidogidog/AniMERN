import React from 'react'
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import ConstGeneral from "../constants/ConstGeneral";

const PageRegistration = () => {
	const navigate = useNavigate();
	const handelSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const { username, password, name, age, email} = Object.fromEntries(
			formData.entries()
		);

		await fetch(ConstGeneral.API_URL + "/users/register", {
			method: "POST",
			body: JSON.stringify({ username, password, name, age, email }),
			headers: { "Content-Type": "application/json" },
		});

		navigate("/");
	};

	return (
		<div>
			<Form onSubmit={handelSubmit}>
				<Form.Label htmlFor="inputName">name</Form.Label>
				<Form.Control type="text" name="name" id="inputName" />
				<Form.Label htmlFor="inputUsername">username</Form.Label>
				<Form.Control type="text" name="username" id="inputUsername" />
				<Form.Label htmlFor="inputAge">Age</Form.Label>
				<Form.Control type="text" name="age" id="inputAge" />
				<Form.Label htmlFor="inputEmail">Email</Form.Label>
				<Form.Control type="text" name="email" id="inputEmail" />
				<Form.Label htmlFor="inputPassword5">Password</Form.Label>
				<Form.Control type="text" name="password" id="inputPassword" />
				<Form.Control type="submit" value="register" />
			</Form>
		</div>
	);
};

export default PageRegistration;
