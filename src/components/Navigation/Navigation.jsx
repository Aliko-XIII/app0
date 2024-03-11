import s from './Navigation.module.css'
import NavFriends from './NavFriends/NavFriends';
import NavItem from './NavItem/NavItem';



const Navigation = (props) => {
    return (<nav className={s.nav}>
        <NavItem name='Profile' link='profile' />
        <NavItem name='Messages' link='messages' />
        <NavItem name='News' link='news' />
        <NavItem name='Music' link='music' />
        <NavItem name='Settings' link='settings' />

        <NavFriends friends={props.state.friends} />
    </nav>);
}



export default Navigation;