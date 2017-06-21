function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
        // return the new
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                // before deleted one
                ...state.slice(0, action.i),
                // after deleted one
                ...state.slice(action.i +1)
            ]
        default:
            return state;
    }
}

function comments(state = [], action){
    if(typeof action.postId !== 'undefined'){
        return {
            // take current state
            ...state,
            // otherwise this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}


export default comments;