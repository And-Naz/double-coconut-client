import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import "./css/style.postlist.css"

function PostsList() {
	const [listOfPosts, setListOfPosts] = useState([])
	const { loading, error, request } = useHttp()
	useEffect(() => {
		request("/posts").then(res => setListOfPosts(res.data))
	}, [])
	return (
		<>
			{
				listOfPosts && listOfPosts.map(post => {
					return (
						<div key={post.id} className="post">
							<h3 className='post__title'>{post.title}</h3>
							<p className='post__body'>{post.text}</p>
							<address className='post__footer'>{post.userName}</address>
						</div>
					)
				})
			}
		</>
	)
}

export default PostsList