import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useHttp from "../../hooks/useHttp";
import api from "../../api"

const validationSchema = Yup.object().shape({
	title: Yup.string().required("You must input a Title!"),
	text: Yup.string().required("The text can't be blunk."),
});


function CreatePost() {
	const { loading, error, request } = useHttp()
	return (
		<div className="form">
			<Formik
				initialValues={{
					title: "",
					text: "",
				}}
				onSubmit={(data) => {
					const retVal = request("/posts", data)
					// set state of posts
				}}
				validationSchema={validationSchema}
			>
				{(props) => {
					// const {
					// 	values,
					// 	handleChange,
					// 	handleBlur,
					// 	handleSubmit,
					// 	errors
					// } = props;
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
							<div className="formRow">
								<button type="submit" className="formButton">Create Post</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div >
	);
}

export default CreatePost;