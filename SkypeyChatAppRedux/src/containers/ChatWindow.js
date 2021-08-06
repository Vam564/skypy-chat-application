import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats"; 
import _ from 'lodash'
import './ChatWindow.css'
import MessageInput from "./MessageInput";



const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const { typing, contacts, messages } = state;
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)}></Chats>
      <MessageInput value={typing} ></MessageInput>
    </div>
  );
};

export default ChatWindow;