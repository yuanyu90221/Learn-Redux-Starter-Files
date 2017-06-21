// a reducer tasks in two things

// 1. the action( info about what happened)
// 2. copy of current state
function posts(state = [], action){
    const i = action.index;
    switch(action.type){
        case 'INCREMENT_LIKES':
            // return the update state
            console.log('Incrementing Likes!!');
            
            return [
                ...state.slice(0,i), // before
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1) // after
            ];
        default:
            return state;
    }
}

export default posts;
