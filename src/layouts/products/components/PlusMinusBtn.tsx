// react components
import { useState } from "react";

//mui components
import { Icon, Grid } from "@mui/material";

//Material Dashboard Theme components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

//css
import "./styles/PlusMinusBtn.css";
import MDPagination from "components/MDPagination";
import MDButton from "components/MDButton";

// Declaring props types for the Breadcrumbs
interface Props {
  value?: number;
  steps?: number;
  max: number;
  pkey: string;
}

function updatelocaldata(newvalue: number, key: string) {
  var localdata = JSON.parse(localStorage.getItem("ProductListData"));
  const newArr = localdata.map((obj: any) => {
    if (obj.key === key) {
      return { ...obj, add: newvalue };
    }
    return obj;
  });
  localStorage.setItem("ProductListData", JSON.stringify(newArr));
}

export default function PlusMinusBtn({ value, max, pkey, steps }: Props): JSX.Element {
  let [count, setCount] = useState(value ? value : 0);

  // 👇️ called every time input's value changes
  const handleChange = (event: any) => {
    var value = Number(event.target.value);
    if (value < 0) {
      setCount(0);
    } else if (value > max) {
      setCount(max);
    } else {
      setCount(value * 1);
    }
    updatelocaldata(count, pkey);
  };

  function incrementCount() {
    if (count < max) {
      count = count + steps;
      setCount(count);
      updatelocaldata(count, pkey);
    }
  }
  function decrementCount() {
    if (count > 0) {
      count = count - steps;
      setCount(count);
      updatelocaldata(count, pkey);
    }
  }
  return (
    <Grid item mx="auto" display="flex" alignItems="center" minWidth={90} maxWidth={150}>
      <MDButton variant="outlined" color="dark" iconOnly size="small" onClick={decrementCount}>
        <Icon sx={{ fontWeight: "bold" }}>remove</Icon>
      </MDButton>
      <MDInput
        inputProps={{ min: 0, max: { max } }}
        type="number"
        value={count}
        onChange={handleChange}
        onBlur={handleChange}
        size="small"
        // fullWidth
        sx={{ mx: 0.5 }}
      />
      <MDButton variant="outlined" color="dark" iconOnly size="small" onClick={incrementCount}>
        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
      </MDButton>
    </Grid>
  );
}
