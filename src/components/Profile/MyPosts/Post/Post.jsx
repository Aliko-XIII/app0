import s from './Post.module.css'

const Post = ({ content, id, likes }) => {
    return (<div className={s.item}>
        <img className={s.marker_img} src="https://cdn-icons-png.flaticon.com/512/2941/2941090.png" alt="Failed" />
        <span>{content}</span>
        <div>likes: {likes}</div>
        <hr />
    </div>);
}

export default Post;