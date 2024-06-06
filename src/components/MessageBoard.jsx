import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [message, setMessage] = useState([]);

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newMessage = [...message];
            newMessage.push(inputMessage);
            setMessage(newMessage);
            setInputMessage("");
          }}
        >
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              value={inputMessage}
              onChange={(event) => {
                setInputMessage(event.target.value);
              }}
            />
          </label>
          <button className="submit-message-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      {message.map((item, index) => {
        return (
          <div class="board" key={index}>
            <div key={index} className="message">
              {item}
              <button
                className="delete-button"
                onClick={() => {
                  const newMessage = [...message];
                  newMessage.splice(index, 1);
                  setMessage(newMessage);
                }}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
