import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

      // <IconButton aria-label="add a task" color="primary">
      //   <AddCircleOutlineIcon fontSize="large" />
      // </IconButton>
function Form(props) {
    const [name, setName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }  
    function handleChange(e) {
        setName(e.target.value);
    }
    return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <TextField 
        id="new-todo-input" 
        variant="outlined" 
        multiline
        rows={4}
        placeholder="what needs to be done?"
        value={name}
        onChange={handleChange}
        />
      <Button type="submit" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />}>
        add a task
      </Button>
    </form>
  );
}

export default Form;
