import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PriceEstimation from "./PriceEstimation";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { setSelectedDateTime } from "../actions/product.action";
import { useNavigate } from "react-router";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function SelectTime() {
  const [selectedDate, setSelectedDate] = useState("");

  const selectedModel = useSelector((data) => data.selectedPhoneModel);
  const selectedCategory = useSelector((data) => data.selectedCategory);
  const totalPrice = useSelector((data) => data.totalPrice);

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let changeHandler = (event) => {
    const selectedDate = event.target.value;
    const modfyDate = new Date(selectedDate).toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "long",
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
      second: "2-digit",
    });
    console.log(modfyDate);
    setSelectedDate(modfyDate);
  };

  const d = new Date();
  let day = d.getDay();
  console.log("day:", day);

  let clickHandler = () => {
    dispatch(setSelectedDateTime(selectedDate));
    navigate("/technician-score");
  };
  let currentTime = new Date();

  return (
    <div>
      <h1> Pick an arrival time that suits you </h1>
      <div>
        <form className={classes.container} noValidate>
          <TextField
            onChange={changeHandler}
            id='datetime-local'
            label='Next appointment'
            type='datetime-local'
            defaultValue={currentTime}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>

      <div>
        <PriceEstimation
          estimatedPrice={totalPrice}
          selectingModel={selectedModel}
          selectingCatogory={selectedCategory}
        />
      </div>
      <div>
        <Button style={{ background: "cyan" }} onClick={clickHandler}>
          Continue
        </Button>
      </div>
    </div>
  );
}

// uninstall sassy-datepicker from package.json.
// delete from terminal.
