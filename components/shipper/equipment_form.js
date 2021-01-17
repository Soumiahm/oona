import React from "react";
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';

const Equipment = (props) => {
  const { register, handleSubmit } = useForm();
  

  return (
    <form onSubmit={handleSubmit(props.onSubmitBasics)}>
      <h2>Equipment</h2>

      <input type="radio" name="equipmentType" value="dryVan" ref={register} />
      <label>Dry Van</label>
      <input type="radio" name="equipmentType" value="reefer" ref={register}/>
      <label>Reefer</label>

      <h5>Accessorials(Optional)</h5>

      <div>
        <input type="checkbox" name="foodGradeTrailer" />
        <label for="foodGradeTrailer">Food Grade Trailer</label>
      </div>

      <div>
        <input type="checkbox" name="driverAssist" checked />
        <label for="driverAssist">Driver Assist</label>
      </div>

      <div>
        <input type="checkbox" name="loadBars" checked />
        <label for="loadBars">Load Bars/Load Locks</label>
      </div>

      <div>
        <input type="checkbox" name="pipeStakes" />
        <label for="pipeStakes">Pipe Stakes</label>
      </div>

      <div>
        <input type="checkbox" name="ppe" />
        <label for="ppe">PPE</label>
      </div>

      <div>
        <input type="checkbox" name="straps" />
        <label for="straps">Straps</label>
      </div>

      <div>
        <input type="checkbox" name="twicRequired" />
        <label for="twicRequired">TWIC Required</label>
      </div>

      <Button type="submit" variant="contained" color="secondary">Next</Button>
    </form>
  );
};

export default Equipment;
