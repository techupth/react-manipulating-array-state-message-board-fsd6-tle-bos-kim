import { useState } from "react";

function MessageBoard() {
  const [messageList, setMessageList] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const addMessage = (event) => {
    event.preventDefault();
    setMessageInput(event.target.value);
    const newMessage = [...messageList];
    newMessage.push(messageInput);
    setMessageList(newMessage);
    setMessageInput("");
  };

  const deleteMessage = (firstIndex) => {
    const newMessage = [...messageList];
    newMessage.splice(firstIndex, 1);
    setMessageList(newMessage);
    setMessageInput("");
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => {
                deleteMessage(index);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
