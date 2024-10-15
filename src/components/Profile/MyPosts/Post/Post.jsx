import post from "./Post.module.css"
import Avatar from "../../../Avatar/Avatar";
function Post({postText, likesCount}) {
    return (
        <div className={post.container}>
            <Avatar />
            <div className={post.content}>
                <h2>{postText}</h2>
            </div>
            <div className={post.likes}>
                <p>Likes: {likesCount}</p>
            </div>
        </div>
    );
}

export default Post;