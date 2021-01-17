import React from 'react';
import { useForm } from "react-hook-form";


const Delivery = (props) => {
  const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmitBasics)}>
          <h2>Delivery</h2>
          <label>Shipment tracking number</label>
          <input
            type="text"
            placeholder=""
            name="trackingNumber"
            ref={register}
          />
          <label >PO/Reference number(optional)</label>
          <input
            type="text"
            placeholder=""
            name="referenceNumber"
            ref={register}
          />
          <label>Shipment notes(optional)</label>
          <textarea
            type="text"
            placeholder=""
            name="shipmentNotes"
            ref={register}
          />
         

          <button type="submit">Next</button>
        </form>
    )
}

export default Delivery;
