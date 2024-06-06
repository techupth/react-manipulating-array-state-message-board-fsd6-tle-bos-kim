import { useState } from "react";

function MessageBoard() {
const [textMessage, setTextMessage] = useState([]);
const [addText, setAddtext] = useState("");

const setNewText = (event) => 
  setAddtext(event.target.value);

const addData = () => {
  const newData = [...textMessage]
  newData.push(addText);
  setTextMessage(newData);
  setAddtext("");
};

const deleteData = (dataIndex) => {
  const newData = [...textMessage]
  newData.splice(dataIndex, 1);
  setTextMessage(newData);
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
            value={addText}
            onChange={setNewText}
          />
        </label>
        <button className="submit-message-button" onClick={addData}>Submit</button>
      </div>
      <div class="board">
          <ul>
              {textMessage.map((textMes, index) => (
              <li key={index}><div className="message">
                <h1>{textMessage}</h1>
                <button className="delete-button" onClick={() => deleteData()}>x</button></div>
              </li>))} 
             </ul>
          </div>
    </div>
  );
}

export default MessageBoard;
