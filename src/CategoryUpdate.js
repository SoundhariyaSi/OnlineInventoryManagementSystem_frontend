import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';

function Update({onDataUpdate}) {
    const [ids, setIds] = useState(0)
    const [cname,setCname]=useState(" ")
 


    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleButtonClick = () => {
      setIsSubmitted(!isSubmitted);
    };

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.put(`http://localhost:8082/cupdatebyid/${ids}`, {
         id:ids,
         categoryname:cname,
      })
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
        // Call onDataUpdate to trigger data update in the parent component
        onDataUpdate();
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logInnform">
            <form onSubmit={handleSubmit}>
                <p>Id</p>

                <input
                type="text"
                placeholder="Id"
                onChange={(e) => {setIds(e.target.value)}}
                />

                <p>Category Name</p>

                <input
                  type="text"
                  placeholder="categoryname"
                  onChange={(e) => {setCname(e.target.value)}}
                />

                

                <div class="btnncontainer">
                    <button id="btn4" type="submit" onClick={handleButtonClick}>Update</button>
                    {isSubmitted && <p id="btn4-text" class="popup-message">Updated Successfully!</p>}
                </div>
            </form>
        </div>
      </header>
    </div>
  );
}

export default Update;