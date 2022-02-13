import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../uiKits/Button"

const validationSchema = Yup.object().shape({
	title: Yup.string().max(15).required("You must input a Title!"),
	text: Yup.string().required("The text can't be blunk."),
});

function FormPost({ title = "", text = "", onSubmit, onReset, isdisabled = false, edit }) {
	const actionsObj = {}
	onSubmit && (actionsObj.onSubmit = onSubmit)
	onReset && (actionsObj.onReset = onReset)
	return (
		<div className="form">
			<Formik
				initialValues={{
					title,
					text,
				}}
				{...actionsObj}
				validationSchema={validationSchema}
				onReset={onReset}
			>
				{(props) => {
					/* Linke this component rerender correct */
					return (
						<Form className="formContainer">
							<div className="formRow">
								<label>
									Title
									<Field
										autoComplete="off"
										className="input"
										name="title"
									/>
									<ErrorMessage name="title" component="span" />
								</label>
							</div>
							<div className="formRow">
								<label>
									Post
									<Field
										autoComplete="off"
										className="input input--tall"
										name="text"
									/>
									<ErrorMessage name="text" component="span" />
								</label>
							</div>
							{
								!edit
									? (
										<div className="formRow">
											<Button disabled={isdisabled} mode="form-submit">Create Post</Button>
										</div>
									)
									: (
										<>
											<div className="formRow">
												<Button disabled={isdisabled} mode="form-submit">Save</Button>
												<Button disabled={isdisabled} mode="form-reset">Cancel</Button>
											</div>
										</>
									)
							}

						</Form>
					);
				}}
			</Formik>
		</div >
	);
}

export default FormPost;