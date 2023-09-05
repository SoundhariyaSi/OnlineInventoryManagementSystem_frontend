import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';

function Update({onDataUpdate}) {
    const [ids, setIds] = useState(0)
    const [ssku, setSku] = useState("")
    const [name, setName] = useState("")
    const [ssize, setSize] = useState("")
    const [scolor, setColor] = useState("")
    const [sgender, setGender] = useState("")
    const [supid, setSupId] = useState(0)
    const [purpri, setPurpri] = useState(0)
    const [retpri, setRetPri] = useState(0)
    const [quan,setQuan]=useState(0)


    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleButtonClick = () => {
      setIsSubmitted(!isSubmitted);
    };

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.put(`http://localhost:8082/updatebyid/${ids}`, {
        product_id:ids,
        sku:ssku,
        product_name: name,
        size: ssize,
        color:scolor,
        gender:sgender,
        supplier_id:supid,
        purch_price:purpri,
        retail_price:retpri,
        quantity:quan,
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
                <p>Product Id</p>

                <input
                type="text"
                placeholder="ID please"
                onChange={(e) => {setIds(e.target.value)}}
                />

                <p>SKU</p>

                <input
                  type="text"
                  placeholder="SKU please"
                  onChange={(e) => {setSku(e.target.value)}}
                />

                <p> Name</p>

                <input
                  type="text"
                  placeholder = "Name"
                  onChange={(e) => {setName(e.target.value)}}
                />

                <p> Size</p>

                <input
                type="text"
                placeholder = "Size"
                onChange={(e) => {setSize(e.target.value)}}
                />

                <p> Colour</p>

                <input
                type="text"
                placeholder = "colour"
                onChange={(e) => {setColor(e.target.value)}}
                />

                <p> Gender</p>

                <input
                type="text"
                placeholder = "gender"
                onChange={(e) => {setGender(e.target.value)}}
                />
                   <p> Supplier Id</p>

                <input
                type="text"
                placeholder = "supplierId"
                onChange={(e) => {setSupId(e.target.value)}}
                />
                  <p> Purchase Price</p>

                <input
                type="text"
                placeholder = "purPrice"
                onChange={(e) => {setPurpri(e.target.value)}}
                />
                      <p> Retail Price</p>

                <input
                type="text"
                placeholder = "retPrice"
                onChange={(e) => {setRetPri(e.target.value)}}
                />
                      <p> Quantity</p>

                <input
                type="text"
                placeholder = "quantity"
                onChange={(e) => {setQuan(e.target.value)}}
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
