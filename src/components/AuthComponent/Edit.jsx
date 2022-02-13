import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../uiKits/Button"

function Edit({ user, onSubmit, onReset }) {
	const initialValues = {
		email: user.email,
		password: user.password,
		firstName: user.firstName,
		lastName: user.lastName,
		companyName: user.companyName,
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email().required("Email is required"),
		password: Yup.string().min(6).max(20).required("Password is required. (min 6 symbol and max 20 symbols)"),
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		companyName: Yup.string().required("Company Name is required"),
	});

	return (
		<div className="form">
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				onReset={onReset}
				validationSchema={validationSchema}
			>
				<Form className="formContainer">
					<div className="formRow">
						<label>
							Login
							<input
								autoComplete="off"
								className="input"
								disabled={true}
								value={user.login}
							/>
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
						<Button mode="form-submit">Edit</Button>
						<Button mode="form-reset">Cancel</Button>
					</div>
				</Form>
			</Formik>
		</div >
	);
}

export default Edit;