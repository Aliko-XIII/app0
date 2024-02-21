import s from './Message.module.css';

const Message = ({ user, text, id }) => {
    return (<div className={s.message}>
        <div className={s.message_user}>
            <img src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
                alt="Faile user load"
                className={s.user_img} />
            <span className={s.user_name}>{user}</span>
        </div>
        <div className={s.message_text}>{text}</div>
    </div>);
}

export default Message;