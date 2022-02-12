import { useEffect, useState } from 'react';
import api from "../../api"
import "./css/style.postlist.css"

function PostsList() {
	const [listOfPosts, setListOfPosts] = useState([])
	useEffect(() => {
		api.get("/posts").then(res => setListOfPosts(res.data))
	}, [])
	return (
		<>
			{
				listOfPosts.map(post => {
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