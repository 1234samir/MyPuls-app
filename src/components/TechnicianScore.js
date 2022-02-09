import React from "react";
import PriceEstimation from "./PriceEstimation";
import { useSelector } from "react-redux";
import ShowDate from "./ShowDate";
import { useNavigate } from "react-router";
import { Button } from "@material-ui/core";

let TechnicianScore = (props) => {
  const selectedModel = useSelector((data) => data.selectedPhoneModel);
  const selectedCategory = useSelector((data) => data.selectedCategory);
  const totalPrice = useSelector((data) => data.totalPrice);
  const navigate = useNavigate();

  let clickHandler = () => {
    navigate("/enter-user-address");
  };

  return (
    <div>
      <div>
        <h1> My Puls technicians score 96% for on-time arrivals </h1>
      </div>
      <div>
        <PriceEstimation
          estimatedPrice={totalPrice}
          selectingModel={selectedModel}
          selectingCatogory={selectedCategory}
        />
      </div>
      <div>
        <ShowDate />
      </div>
      <div>
        <Button onClick={clickHandler} style={{ background: "cyan" }}>
          {" "}
          Continue
        </Button>
      </div>
    </div>
  );
};
export default TechnicianScore;
