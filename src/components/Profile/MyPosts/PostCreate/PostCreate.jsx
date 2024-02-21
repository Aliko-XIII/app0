import s from './PostCreate.module.css';

const PostCreate = () => {
    return (<div className={s.post_create}>
        <textarea name='new-post' className={s.new_post_area} cols='30' rows='2' placeholder='your news...'></textarea>
        <button type='submit' className={s.send_btn}>Send</button>
    </div>);
}

export default PostCreate;
