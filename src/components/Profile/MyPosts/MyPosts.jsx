import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {createRef} from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";

function MyPosts(props) {
    let postsElem = props.state.posts.map(post => <Post postText={post.text} likesCount={post.likes}/>)
    let component = createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let updatePostText = () => {
        let text = component.current.value
        props.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <div className={style.content}>
            <div className={style.newPost}>
                <textarea onChange={updatePostText} ref={component}  value={props.state.postText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElem}
            </div>
        </div>
    );
}

export default MyPosts;