import s from '../Navigation.module.css';
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={`/${props.link}`}
                className={nav => nav.isActive ? s.active : s.not_active}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default NavItem;