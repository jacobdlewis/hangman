import React from 'react';
import "./Message.css";

const Message = ({message}) => {
  if (message.type && message.body) {
    return (
      <div className={`message-${message.type}`}>
        {message.body}
      </div>
    );
  } else {
    return null;
  }
  
}

export default Message;