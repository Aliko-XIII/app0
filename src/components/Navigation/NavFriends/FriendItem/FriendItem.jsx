import s from './FriendItem.module.css';

const FriendItem = (props) => {
    return (<div className={s.friend_profile}>
        <img src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
            alt="" className={s.friend_avatar} />
        <div className={s.friend_name}>
            {props.name}
        </div>
    </div>);
}

export default FriendItem;