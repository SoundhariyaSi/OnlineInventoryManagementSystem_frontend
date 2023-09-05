import React, { useState } from 'react';
import Axios from 'axios';
import './Delete.css';

export default function Delete({ onDataUpdate }) { // Pass onDataUpdate as a prop
  const [ids, setIds] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
    Axios.delete(`http://localhost:8082/delid/${ids}`)
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
        // Call onDataUpdate to trigger data update in the parent component
        onDataUpdate();
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClick(); // Call handleButtonClick when the form is submitted
  };

  return (
    <div className="App">
         <header className="App-header">
        <div className="logInform">
        <form onSubmit={handleSubmit}>
        <p>Delete an item!</p>

        <input
            type="number"
            placeholder="ID please"
            onChange={(e) => {setIds(e.target.value)}}
        />

        <div class="btncontainer">
            <button id="btn4" type="submit" onClick={handleButtonClick}>Delete</button>
            {isSubmitted && <p id="btn4-text" class="popup-message">Deleted Successfully!</p>}
        </div>
        </form>
        </div>
      </header>
    </div>
  );
}
