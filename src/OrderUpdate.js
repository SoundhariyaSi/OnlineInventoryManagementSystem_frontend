import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';

function Update({onDataUpdate}) {
    const [oids, setOids] = useState(0)
    const [orddate, setOrddate] = useState(0)
    const [cname,setCname]=useState(" ")
    const [cinfo,setCinfo]=useState(" ")
    const [shipAddr,setShipAddr]=useState(" ")
    const [tot, setTot] = useState(0)
    const [ordst, setOrdst] = useState(" ")
 


    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleButtonClick = () => {
      setIsSubmitted(!isSubmitted);
    };

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.put(`http://localhost:8082/oupdatebyid/${oids}`, {
        order_id:oids,
        order_date:orddate,
        cust_name:cname,
        contact_info:cinfo,
        shipAddress:shipAddr,
        total:tot,
        orderStatus:ordst
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
                <p>Order Id</p>

                <input
                type="text"
                placeholder="Order Id"
                onChange={(e) => {setOids(e.target.value)}}
                />

                <p>Order Date</p>

                <input
                  type="text"
                  placeholder="OrderDate"
                  onChange={(e) => {setOrddate(e.target.value)}}
                />

                <p>Customer Name</p>

                <input
                  type="text"
                  placeholder = "cname"
                  onChange={(e) => {setCname(e.target.value)}}
                />

                <p>Contact Info</p>

                <input
                type="text"
                placeholder = "customerinfo"
                onChange={(e) => {setCinfo(e.target.value)}}
                />
                <p>Shipping Address</p>

                <input
                type="text"
                placeholder = "shipAddr"
                onChange={(e) => {setShipAddr(e.target.value)}}
                />
                <p>Total</p>

                <input
                type="text"
                placeholder = "total"
                onChange={(e) => {setTot(e.target.value)}}
                />
                <p>Order Status</p>

                <input
                type="text"
                placeholder = "ordstatus"
                onChange={(e) => {setOrdst(e.target.value)}}
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