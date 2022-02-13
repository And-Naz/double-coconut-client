import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../uiKits/Button"

function Registration({ triggerForms, loading, onSubmit }) {
	const initialValues = {
		login: "",
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		companyName: "",
	};

	const validationSchema = Yup.object().shape({
		login: Yup.string().required("Login is required"),
		email: Yup.string().email().required("Email is required"),
		password: Yup.string().min(6).max(20).required("Password is required. (min 6 symbol and max 20 symbols)"),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Comfirm Password is required"),
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		companyName: Yup.string().required("Company Name is required"),
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
							Login
							<Field
								autoComplete="off"
								className="input"
								name="login"
							/>
							<ErrorMessage name="login" component="span" />
						</label>
					</div>
					<div className="formRow">
						<label>
							Email
							<Field
								autoComplete="off"
								className="input"
								name="email"
							/>
							<ErrorMessage name="email" component="span" />
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
						<label>
							Confirm Password
							<Field
								autoComplete="off"
								type="password"
								className="input"
								name="confirmPassword"
							/>
							<ErrorMessage name="confirmPassword" component="span" />
						</label>
					</div>
					<div className="formRow">
						<label>
							First Name
							<Field
								autoComplete="off"
								className="input"
								name="firstName"
							/>
							<ErrorMessage name="firstName" component="span" />
						</label>
					</div>
					<div className="formRow">
						<label>
							Last Name
							<Field
								autoComplete="off"
								className="input"
								name="lastName"
							/>
							<ErrorMessage name="lastName" component="span" />
						</label>
					</div>
					<div className="formRow">
						<label>
							Company Name
							<Field
								autoComplete="off"
								className="input"
								name="companyName"
							/>
							<ErrorMessage name="companyName" component="span" />
						</label>
					</div>
					<div className="formRow">
						<Button disabled={loading} mode="form-submit">Register</Button>
					</div>
					<div className="formRow">
						<Button disabled={loading} onClick={triggerForms} mode="link">Already have account?</Button>
					</div>
				</Form>
			</Formik>
		</div >
	);
}

export default Registration;