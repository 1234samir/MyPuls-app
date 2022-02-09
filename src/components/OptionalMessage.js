import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PriceEstimation from "./PriceEstimation";

export default function OptionalMessage() {
  const navigate = useNavigate();
  const selectedModel = useSelector((data) => data.selectedPhoneModel);
  const selectedCategory = useSelector((data) => data.selectedCategory);
  const totalPrice = useSelector((data) => data.totalPrice);
  let clickHandler = () => {
    navigate("/select-time");
  };
  return (
    <div>
      <h1> Something else you want to add?</h1>
      <textarea> </textarea>

      <Button onClick={clickHandler}> Continue </Button>
      <div>
        <PriceEstimation
          estimatedPrice={totalPrice}
          selectingModel={selectedModel}
          selectingCatogory={selectedCategory}
        />
      </div>
    </div>
  );
}

//1.useSelector u edirsen
//2.sonra reducere gedib, getirmek istediylerini getirirsen yeni, bu cur
// const selectedModel = useSelector((data) => data.selectedPhoneModel);
//3.sonrada  <PriceEstimation u cunki,
// bu compda artiq bir defe PhoneReapair hesablanmish datani goturub
