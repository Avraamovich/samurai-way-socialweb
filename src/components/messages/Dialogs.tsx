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

    let dialogsData = [
        {name: 'Tamila', id: '1'},
        {name: 'Adelina', id: '2'},
        {name: 'Andrew', id: '3'},
    ];

    let dialogsData1 = dialogsData.map( (d) => <DialogItem name={d.name} id={d.id} /> )

    let messagesData = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Bye!'},
    ]

    let messagesData2 = messagesData.map( m => <Conversation message={m.message} /> )

  return (
    <div className={s.dialogsWrap}>
      <div className={s.dialogs}>
          {dialogsData1}
      </div>
      <div className={s.messages}>
          {messagesData2}
      </div>
    </div>
  );
}

function DialogItem  (props: MessageType) {
  return (
    <div className={s.dialog}>
      <NavLink to={'/message/1' + props.id}>{props.name}</NavLink>
    </div>
  )
}

function Conversation  (props: ConversationType){
    return <p>{props.message}</p>
}
