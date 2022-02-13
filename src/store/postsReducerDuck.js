import { Asynchronous } from "./ActionCreatorFactory"

// Actions
const CREATE = 'postsReducerDuck/CREATE';
const UPDATE = 'postsReducerDuck/UPDATE';
const DELETE = 'postsReducerDuck/DELETE';
const EDIT = 'postsReducerDuck/EDIT';

// Default State
const defaultState = {
	list: []
}

// Reducer
export default function postsReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case CREATE: {
			console.log(payload);
			const create_state = { ...state }
			create_state.list = state.list.concat(payload)
			return create_state
		}
		case UPDATE: {
			const update_state = { ...state }
			update_state.list = payload
			return update_state
		}
		case DELETE: {
			const delete_state = { ...state }
			delete_state.list = [...state.list]
			delete_state.list = delete_state.list.filter(post => post.id !== payload.id)
			return delete_state
		}
		case EDIT: {
			const edit_state = { ...state };
			edit_state.list = state.list.map(post => {
				if (post.id === payload.id) {
					return Object.assign(post, payload.post)
				}
				return post
			})
			return edit_state
		}
		default: return state;
	}
}

// Action Creators
export const createPost = Asynchronous(CREATE)
export const updatePosts = Asynchronous(UPDATE)
export const deletePost = Asynchronous(DELETE)
export const editPost = Asynchronous(EDIT)
