import s from '../Navigation.module.css';
import { NavLink } from "react-router-dom";
import FriendItem from './FriendItem/FriendItem';


const NavFriends = (props) => {

    const friendsElements = props.friends.map(friend => <FriendItem name={friend.name} />);

    return (<div className={`${s.item} ${s.friends}`}>
        <NavLink to='/friends'
            className={nav => nav.isActive ? s.active : s.not_active}>
            Friends
        </NavLink>
        <div className={s.friends_list}>
            {friendsElements}
        </div>
    </div>);
}

export default NavFriends;