import SimpleButton from "./SimpleButton"
import LinkButton from "./LinkButton"
import FormButton from "./FormButton"

function Button({ mode, ...props }) {
	if (mode === "link") {
		return <LinkButton {...props} />
	}
	if (mode === "form-submit" || mode === "form-reset") {
		return <FormButton {...props} mode={mode} />
	}
	return (
		<SimpleButton {...props} />
	)
}

export default Button