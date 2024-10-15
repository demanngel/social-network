import style from "./MyPosts.module.css"
import Post from "./Post/Post";
function MyPosts({state}) {
    let postsElem = state.posts.map(post => <Post postText={post.text} likesCount={post.likes}/>)

    return (
        <div className={style.content}>
            <div className={style.newPost}>
                <textarea />
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElem}
            </div>
        </div>
    );
}

export default MyPosts;