import React, { useContext } from "react";
import { useDispatch } from 'react-redux';
import useHttp from "../../hooks/useHttp";
import FormPost from "./FormPost";
import { createPost } from "../../store/postsReducerDuck"
import AuthContext from "../../contexts/AuthContext";

function CreatePost() {
	const { user } = useContext(AuthContext)
	const { loading, request } = useHttp()
	const dispatcher = useDispatch()
	return (
		<FormPost
			onSubmit={async (data, { resetForm }) => {
				const retVal = await request("/posts", "POST", data)
				const newPost = {
					...retVal.data,
					User: user
				}
				dispatcher(createPost(newPost))
				resetForm()
			}}
			isdisabled={loading}
		/>
	)
}

export default CreatePost;