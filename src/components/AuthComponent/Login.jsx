import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../uiKits/Button"

function Login({ triggerForms, loading, onSubmit }) {
	const initialValues = {
		loginOrEemail: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		loginOrEemail: Yup.string().required("Login or Email is required"),
		password: Yup.string().min(6).max(20).required("Password is required."),
	});

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
						<Button disabled={loading} mode="form-submit">Log In</Button>
					</div>
					<div className="formRow">
						<Button disabled={loading} onClick={triggerForms} mode="link">Create account?</Button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default Login;