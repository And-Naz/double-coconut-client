import PostBlock from "./PostBlock"
import FormPost from "./FormPost"
import { useState } from "react"

function Post({ post, control = {} }) {
	const [isEditBlock, setIsEditBlock] = useState(false)
	control.editFunc = () => {
		setIsEditBlock(true)
	}
	if (!isEditBlock) {
		return (
			<PostBlock post={post} control={control} />
		)
	}
	const onSubmit = async (data) => {
		try {
			const updateFunc = control.createUpdateFunc(data)
			await updateFunc()
		} finally {
			setIsEditBlock(false)
		}
	};
	const onReset = (data) => {
		setIsEditBlock(false)
	};
	return (
		<FormPost
			title={post.title} text={post.text} isdisabled={false}
			onSubmit={onSubmit} onReset={onReset} edit={true}
		/>
	)
}

export default Post