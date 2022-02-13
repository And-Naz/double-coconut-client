import SimpleButton from "./SimpleButton"

function SubmitButton({ className = "", mode, ...props }) {
	const commonClassNames = className ? "form-button " + className : "form-button"
	return (
		<SimpleButton className={commonClassNames} type={mode === "form-reset" ? "reset" : "submit"} {...props} />
	)
}

export default SubmitButton