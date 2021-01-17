import React from 'react';
import { useForm } from "react-hook-form";


const Basics = (props) => {

    return (
        // <form onSubmit={handleSubmit(props.onSubmitBasics)}>
        <>
          <h2>Basics</h2>
          <label>Shipment tracking number</label>
          <input
            type="text"
            placeholder=""
            name="trackingNumber"
            ref={props.register}
          />
          <label >PO/Reference number(optional)</label>
          <input
            type="text"
            placeholder=""
            name="referenceNumber"
            ref={props.register}
          />
          <label>Shipment notes(optional)</label>
          <textarea
            type="text"
            placeholder=""
            name="shipmentNotes"
            ref={props.register}
          />
         
</>
        
    )
}

export default Basics
