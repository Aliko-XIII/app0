import s from './Contact.module.css';
import { NavLink } from "react-router-dom";

const Contact = ({ name, id }) => {
    return (<div className={s.contact}>
        <NavLink to={'/messages/' + id}>{name}</NavLink>
    </div>);
};

export default Contact;