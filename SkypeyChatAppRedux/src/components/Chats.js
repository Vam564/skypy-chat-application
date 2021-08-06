import React, { Component,useState,useEffect, useRef } from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {
  
    constructor(props) {
      super(props);
      this.chatsRef = React.createRef();
    }
    componentDidMount() {
      this.scrollToBottom();
    }
    componentDidUpdate() {
      this.scrollToBottom();
    }
    scrollToBottom = () => {
      this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };
  
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}
// const Chats = ({messages}) => {
  
//   const chatsRef = useRef(current.scrollTop)
 
//   useEffect(() => {
    
//     scrollToBottom();
    
//   }, [])
  
//   const scrollToBottom = () => {
//      chatsRef.current.scrollHeight;
//   };


//   return (
//     <div className="Chats" ref={chatsRef}>
//       {messages.map(message => (
//         <Chat message={message} key={message.number} />
//       ))}
//     </div>
//   );

// }

export default Chats;