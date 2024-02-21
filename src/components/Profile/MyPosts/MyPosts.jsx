import s from './MyPosts.module.css'
import Post from './Post/Post';
import PostCreate from './PostCreate/PostCreate';

const MyPosts = ({ posts }) => {
    const postElements = posts.map(post => <Post id={post.id} likes={post.likes} content={post.content} />);
    
    return (<div className={s.posts}>
        <h2>My posts</h2>
        <PostCreate />
        {postElements}
    </div>);
}

export default MyPosts;