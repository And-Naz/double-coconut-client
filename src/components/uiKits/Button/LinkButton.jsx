import SimpleButton from "./SimpleButton"

function LinkButton({ className = "", ...props }) {
	const commonClassNames = className ? "link-button " + className : "link-button"
	return (
		<SimpleButton className={commonClassNames} {...props} />
	)
}

export default LinkButton