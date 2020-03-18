import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    display: "inline-block"
  },
  Radio: {
    display: "inline-block"
  }
}));

export default function RadioButtonsGroup(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Category</FormLabel>
        <RadioGroup
          aria-label="category"
          name="category1"
          value={props.category}
          onChange={props.handleChange}
        >
          <FormControlLabel value="drink" control={<Radio />} label="Drink" />
          <FormControlLabel value="food" control={<Radio />} label="Food" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
