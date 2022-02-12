import CreatePost from "./CreatePost"
import PostsList from "./PostsList"
import "./css/style.main.css"

function Posts() {
	return (
		<section className="posts">
			<aside>
				<CreatePost />
			</aside>
			<article>
				<PostsList />
			</article>
		</section>
	)
}

export default Posts