import s from './Dialogs.module.css'
import {Messages} from "./messages/Messages";
import {DialogItem} from "./dialog-item/DialogItems";
import React from "react";

export type DialogsDataType = {
    name: string
    id: string
}

export type MessagesDataType = {
    id: string
    message: string
}

export function Dialogs(props) {

    let dialogsData1 = props.dialogsData.map( (d) => <DialogItem name={d.name} id={d.id} /> )

    let messagesData2 = props.messagesData.map( m => <Messages message={m.message} /> )

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




