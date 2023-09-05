import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';

function Update({onDataUpdate}) {
    const [ids, setIds] = useState(0)
    const [oid, setOid] = useState(0)
    const [qua, setQua] = useState(0)
    const [uPri, setUPri] = useState(0)
 


    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleButtonClick = () => {
      setIsSubmitted(!isSubmitted);
    };

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.put(`http://localhost:8082/oiupdatebyid/${ids}`, {
         ord_item_id:ids,
         ord_id:oid,
         quantity:qua,
         unitPrice: uPri
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
                <p>OrderItem Id</p>

                <input
                type="text"
                placeholder="OrderItem please"
                onChange={(e) => {setIds(e.target.value)}}
                />

                <p>Order Id</p>

                <input
                  type="text"
                  placeholder="OrderIdplease"
                  onChange={(e) => {setOid(e.target.value)}}
                />

                <p> Quantity</p>

                <input
                  type="text"
                  placeholder = "quantity"
                  onChange={(e) => {setQua(e.target.value)}}
                />

                <p> Unit Price</p>

                <input
                type="text"
                placeholder = "UnitPrice"
                onChange={(e) => {setUPri(e.target.value)}}
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
