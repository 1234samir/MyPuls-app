import React from "react";

export default function PriceEstimation(props) {
  return (
    <div>
      <h4> {props.selectingModel}</h4>
      {props.selectingCatogory.map((el) => {
        return (
          <div>
            {el.name} {el.price}
          </div>
        );
      })}
      <div>
        <h1> Estimated Price:${props.estimatedPrice} </h1>
      </div>
    </div>
  );
}
