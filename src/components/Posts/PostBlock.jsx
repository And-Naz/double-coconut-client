import Button from "../uiKits/Button"

function PostBlock({ post, control = {} }) {
	return (
		<div className="post">
			<div className='post__title__wrapper'>
				<h3 className='post__title'>{post?.title}</h3>
				{
					control?.canControl && (
						<div className="post__buttons">
							<Button onClick={control.editFunc}>Edit</Button>
							<Button onClick={control.deleteFunc}>Delete</Button>
						</div>
					)
				}
			</div>
			<p className='post__body'>{post?.text}</p>
			<address className='post__footer'>{post?.User.login}</address>
		</div>
	)
}

export default PostBlock