export type MessagesType = {
    message: string
}

export function Messages  (props: MessagesType){
    return <p>{props.message}</p>
}