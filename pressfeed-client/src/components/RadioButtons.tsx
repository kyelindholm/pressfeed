import { Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material";

const RadioButtons: React.FC = () => {

  return (
    <FormControl style={{marginLeft: "19vw"}}>
      <RadioGroup
        row
        aria-labelledby="changeview"
        name="position"
        defaultValue="feed"
      >
        <FormControlLabel value="feed" control={<Radio/>} label="Feed" labelPlacement="bottom"/>
        <FormControlLabel value="favorites" control={<Radio/>} label="Favorites" labelPlacement="bottom"/>
      </RadioGroup>

    </FormControl>

  );
};

export default RadioButtons;
