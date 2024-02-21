import s from '../Navigation.module.css';
import { NavLink } from "react-router-dom";
import FriendItem from './FriendItem/FriendItem';


const NavFriends = (props) => {
    return (<div className={`${s.item} ${s.friends}`}>
        <NavLink to='/friends'
            className={nav => nav.isActive ? s.active : s.not_active}>
            Friends
        </NavLink>
        <div className={s.friends_list}>
            <FriendItem name={'Name'} />
            <FriendItem name={'Name'} />
            <FriendItem name={'Name'} />
        </div>
    </div>);
}

export default NavFriends;