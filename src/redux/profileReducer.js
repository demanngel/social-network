const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = {
            id: 5,
            text: state.postText,
            likes: 0
            }
            state.posts.push(post);
            state.postText = '';
            return state;
        }
        case UPDATE_POST_TEXT: {
            state.postText = action.text;
            return state;
        }
        default: {
            return state;
        }
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updatePostTextCreator = text =>
    ({type: UPDATE_POST_TEXT, text: text});

export default profileReducer;