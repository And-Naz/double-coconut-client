import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../api"

function Login({ triggerForms }) {
	const initialValues = {
		loginOrEemail: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		loginOrEemail: Yup.string().required("Login or Email is required"),
		password: Yup.string().min(6).max(20).required("Password is required."),
	});

	const onSubmit = (data) => {
		// axios.post("http://localhost:3001/auth", data).then(() => {
		// 	console.log(data);
		// });
	};

	return (
		<div className="form">
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form className="formContainer">
					<div className="formRow">
						<label>
							Login Or Eemail
							<Field
								autoComplete="off"
								className="input"
								name="loginOrEemail"
							/>
							<ErrorMessage name="loginOrEemail" component="span" />
						</label>
					</div>
					<div className="formRow">
						<label>
							Password
							<Field
								autoComplete="off"
								type="password"
								className="input"
								name="password"
							/>
							<ErrorMessage name="password" component="span" />
						</label>
					</div>
					<div className="formRow">
						<button type="submit" className="formButton">Register</button>
					</div>
					<div className="formRow">
						<button className="formSwitchButton" onClick={triggerForms}>Create account?</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default Login;