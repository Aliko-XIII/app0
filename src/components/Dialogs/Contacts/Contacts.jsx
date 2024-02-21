import s from "./Contacts.module.css";
import Contact from "./Contact/Contact";



const Contacts = ({contacts}) => {
    const contactElements = contacts.map(data => <Contact name={data.name} id={data.id} />);
    return (
        <div className={s.contacts_block}>
            <header>Dialogs</header>
            <div className={s.contacts}>
                {contactElements}
            </div>
        </div>
    );
};

export default Contacts;