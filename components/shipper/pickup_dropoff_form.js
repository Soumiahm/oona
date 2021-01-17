import React from 'react';
import { useForm } from "react-hook-form";


const PickupDropoffForm = (props) => {
  const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmitBasics)}>
          <h2>Crgo</h2>
          <label>Weight</label>
          <input
            type="number"
            placeholder=""
            name="weight"
            ref={register}
          />
          <label >Units</label>
          <input
            type="number"
            placeholder=""
            name="units"
            ref={register}
          />
          <label>Commodity description</label>
          
          <input
            type="text"
            placeholder="e.g. wooden planks, paper, roofing material, etc."
            name="commodityDescription"
            ref={register}
          />

          <button type="submit">Next</button>
        </form>
    )
}

export default PickupDropoffForm;
