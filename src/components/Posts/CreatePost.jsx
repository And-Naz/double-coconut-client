import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../api"

function CreatePost() {
	const initialValues = {
		title: "",
		text: "",
	};

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("You must input a Title!"),
		text: Yup.string().required("The text can't be blunk."),
		userName: Yup.string().min(1).required()
	});

	const onSubmit = (data) => {
		console.log(data);
		api.post("/posts", data).then((response) => {
			console.log("IT WORKED");
		});
	};
	console.log(validationSchema);
	return (
		<div className="form">
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form className="formContainer">
					<label>
						Title
						<Field
							autoComplete="off"
							className="input"
							name="title"
						/>
						<ErrorMessage name="title" component="span" />
					</label>
					<label>
						Post
						<Field
							autoComplete="off"
							className="input input--tall"
							name="text"
						/>
						<ErrorMessage name="text" component="span" />
					</label>
					<label>
						Username
						<Field
							autoComplete="off"
							className="input"
							name="userName"
						/>
						<ErrorMessage name="userName" component="span" />
					</label>
					<button type="submit" className="formButton"> Create Post</button>
				</Form>
			</Formik>
		</div>
	);
}

export default CreatePost;