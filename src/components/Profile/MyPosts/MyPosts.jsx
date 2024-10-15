import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {createRef} from "react";

function MyPosts(props) {
    let postsElem = props.state.posts.map(post => <Post postText={post.text} likesCount={post.likes}/>)
    let component = createRef();

    let addPost = () => {
        let text = component.current.value
        props.addPost(text);
    }

    let changePostText = () => {
        let text = component.current.value
        props.changePostText(text);
    }

    return (
        <div className={style.content}>
            <div className={style.newPost}>
                <textarea onChange={changePostText} ref={component}  value={props.state.postText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElem}
            </div>
        </div>
    );
}

export default MyPosts;