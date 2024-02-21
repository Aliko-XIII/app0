import s from './Dialogs.module.css';
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";





const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Contacts contacts={props.state.contacts} />
            <Messages messages={props.state.messages} />
        </div>
    );
}

export default Dialogs;