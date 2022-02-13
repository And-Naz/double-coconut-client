import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useHttp from '../../hooks/useHttp';
import { deletePost, updatePosts, editPost } from "../../store/postsReducerDuck"
import Post from './Post';
import AuthContext from '../../contexts/AuthContext';
import "./css/style.postlist.css"

function selectPosts(state) {
	return state.posts.list
}

function PostsList() {
	const { user } = useContext(AuthContext)
	const listOfPosts = useSelector(selectPosts)
	const { request } = useHttp()
	const dispatcher = useDispatch()
	const createPropsForPost = (user, post) => {
		const props = { post }
		if (post.User.login !== user.login) {
			return { post }
		}
		props.control = {
			canControl: true,
			createUpdateFunc: (newData) => {
				return async () => {
					const requestData = { post: newData, id: post.id }
					const retVal = await request("/posts", "PATCH", requestData)
					if (retVal.status === 204) {
						dispatcher(editPost(requestData))
					}
				}
			},
			deleteFunc: async () => {
				const retVal = await request("/posts/" + post.id, "DELETE")
				if (retVal.status === 204) {
					dispatcher(deletePost({ id: post.id }))
				}
			},
		}
		return props
	}
	useEffect(() => {
		request("/posts").then(res => (console.log(res), dispatcher(updatePosts(res.data))))
	}, [])
	return (
		<>
			{
				listOfPosts && listOfPosts.map(post => {
					const generatedProps = createPropsForPost(user, post)
					return (
						<Post
							key={post.id}
							{...generatedProps}
						/>
					)
				})
			}
		</>
	)
}

export default PostsList