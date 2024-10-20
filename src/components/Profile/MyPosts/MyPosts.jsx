import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostCreator, updatePostTextCreator} from "../../../redux/profileReducer";

function MyPosts(props) {
    let postsElem = props.state.posts.map(post => <Post postText={post.text} likesCount={post.likes}/>)

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let updatePostText = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostTextCreator(text));
    }

    return (
        <div className={style.content}>
            <div className={style.newPost}>
                <textarea onChange={updatePostText} value={props.state.postText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElem}
            </div>
        </div>
    );
}

export default MyPosts;