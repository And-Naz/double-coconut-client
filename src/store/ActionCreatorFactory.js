export function Synchronous(type) {
	return (payload) => ({ type, payload })
}
export function Asynchronous(type) {
	return (param) => (dispatch) => {
		let promise = null
		if (param instanceof Promise) {
			promise = param
		} else {
			promise = Promise.resolve(param)
		}
		promise.then(payload => dispatch({ type, payload }))
	}
}