import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type MessageType = {
  name: string
  id: string
}

type ConversationType = {
  message: string
}

export function Dialogs() {

    let dataDialogs = [
        {name: 'Tamila', id: '1'},
        {name: 'Adelina', id: '2'},
        {name: 'Andrew', id: '3'},
    ];

    let dataMessages = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Bye!'},
    ]

  return (
    <div className={s.dialogsWrap}>
      <div className={s.dialogs}>
        <DialogItem name={dataDialogs[0].name} id={dataDialogs[0].id} />
        <DialogItem name={dataDialogs[1].name} id={dataDialogs[1].id} />
        <DialogItem name={dataDialogs[2].name} id={dataDialogs[2].id} />
      </div>
      <div className={s.messages}>
        <Conversation message={dataMessages[0].message} />
        <Conversation message={dataMessages[1].message} />
        <Conversation message={dataMessages[2].message} />
      </div>
    </div>
  );
};

const DialogItem = (props: MessageType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/message/1' + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Conversation = (props: ConversationType) => {
    return <p>{props.message}</p>
}
