import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import PriceEstimation from "./PriceEstimation";
import {
  setSelectedColor,
  setSelectedCategory,
  setTotalPrice,
} from "../actions/product.action";

// json-server --watch db.json --port 5000

export default function DeviceColor() {
  const [searchParams] = useSearchParams();
  let selectedCatogory = JSON.parse(searchParams.get("selectedCatogory"));
  console.log(selectedCatogory);
  let estimatedprice = searchParams.get("estimatedprice");
  console.log(estimatedprice);
  const selectedModel = useSelector((data) => data.selectedPhoneModel);
  const [color, setColor] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cellPhone/${selectedModel}`)
      .then((res) => {
        console.log(res.data);
        setColor(res.data.color);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let clickHandler = (color) => {
    dispatch(setSelectedColor(color));
    dispatch(setSelectedCategory(selectedCatogory));
    dispatch(setTotalPrice(estimatedprice));
    navigate("/message");
  };
  // this setSelectedColor is not from useState, it s from action.

  return (
    <div>
      <div>
        <PriceEstimation
          selectingCatogory={selectedCatogory}
          estimatedPrice={estimatedprice}
          selectingModel={selectedModel}
        />
      </div>
      {color.map((color) => {
        return (
          <div
            style={{
              background: "light grey",
              display: "flex",
              justifyContent: "center",
              fontWeight: "20px",
              marginBottom: "15px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            onClick={clickHandler.bind(null, color)}>
            {color}
          </div>
        );
      })}
    </div>
  );
}
