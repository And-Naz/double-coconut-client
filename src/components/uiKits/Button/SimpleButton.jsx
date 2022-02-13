import "./simplebutton.css"
function SimpleButton({ className = "", ...props }) {
	const commonClassNames = className ? "btn " + className : "btn"
	return <button className={commonClassNames} {...props} />
}

export default SimpleButton