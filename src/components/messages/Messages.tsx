import { NavLink } from 'react-router-dom';
import s from './Message.module.css'

type MessageType = {
  name: string
  id: string
}

type ConversationType = {
  message: string
}

export function Messages() {
  return (
    <div className={s.messageWrapp}>
      <div>
        <DialogItem name='Tamila' id='1' />
        <DialogItem name='Adelina' id='2' />
        <DialogItem name='Andrew' id='3' />
      </div>
      <div className={s.conversation}>
        <Conversation message='Hi!'/>
        <Conversation message='How are you?'/>
        <Conversation message='Bye!'/>
      </div>
    </div>
  );
};

const Conversation = (props: ConversationType) => {
  return <p>{props.message}</p>
}


const DialogItem = (props: MessageType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/message/1' + props.id}>{props.name}</NavLink>
    </div>
  )
}
