import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {createRef} from "react";

function MyPosts({state}) {
    let postsElem = state.posts.map(post => <Post postText={post.text} likesCount={post.likes}/>)
    let component = createRef();

    let addPost = () => {
        alert(component.current.value);
    }

    return (
        <div className={style.content}>
            <div className={style.newPost}>
                <textarea ref={component}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElem}
            </div>
        </div>
    );
}

export default MyPosts;