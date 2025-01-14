import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogsDataType} from './components/chats/Dialogs';
import {MessagesDataType} from './components/chats/Dialogs';

let dialogsData = [
    {name: 'Tamila', id: '1'},
    {name: 'Adelina', id: '2'},
    {name: 'Andrew', id: '3'},
];

let messagesData = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Bye!'},
]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} />,
  document.getElementById('root')
);