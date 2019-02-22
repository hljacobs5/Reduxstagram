function comments(state=[], action) {
	return state;
}

function postComments(state = [], action) {
	switch(action.type){
		case 'ADD_COMMENT':
			return [...state,{
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return state;
		default:
			return state;
	}
	return state;
}

function comments(state=[], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			...state,
			[action.postId]: postcomments(state[action.postId], action)
		}
	}
	return state;
}
export default comments;