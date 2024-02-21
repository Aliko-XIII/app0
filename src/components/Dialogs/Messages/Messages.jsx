import s from "./Messages.module.css";
import Message from "./Message/Message";



const Messages = ({ messages }) => {
    const messageElements = messages.map(message => <Message user={message.user} id={message.id} text={message.text} />);

    return (<div className={s.messages_block}>
        <div className={s.messages}>
            {messageElements}
        </div>
    </div>);
};

export default Messages;