import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: string
}

export function DialogItem  (props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <NavLink to={'/message/1' + props.id}>{props.name}</NavLink>
        </div>
    )
}