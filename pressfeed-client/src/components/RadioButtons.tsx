import { Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material";
import { RadioButtonProps } from "../../types";

const RadioButtons: React.FC<RadioButtonProps> = ({radioButtonFunctions}: any) => {

  return (
    <FormControl style={{marginLeft: "19vw"}}>
      <RadioGroup
        row
        aria-labelledby="changeview"
        name="position"
        defaultValue="feed"
      >
        <FormControlLabel value="feed" control={<Radio/>} label="Feed" labelPlacement="bottom" onClick={() => {radioButtonFunctions.handleClickFeed()}}/>
        <FormControlLabel value="favorites" control={<Radio/>} label="Favorites" labelPlacement="bottom" onClick={() => {radioButtonFunctions.handleClickFavorites()}}/>
      </RadioGroup>

    </FormControl>

  );
};

export default RadioButtons;
