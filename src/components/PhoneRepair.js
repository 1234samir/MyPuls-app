import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox } from "@material-ui/core";
import PriceEstimation from "./PriceEstimation";
import { useNavigate } from "react-router-dom";

export let PhoneRepair = () => {
  const [parts, setParts] = useState([]);
  const selectedModel = useSelector((data) => data.selectedPhoneModel);
  const [showButton, setShowButton] = useState(false);
  const [selectedCatogory, setSelectedCatogory] = useState([]);
  const [totalEsimatedPrice, setTotalEsimatedPrice] = useState("");

  console.log(selectedModel);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cellPhone/${selectedModel}`)
      .then((res) => {
        console.log(res.data);
        setParts(res.data.parts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let selectedPartHandler = (partCategory) => {
    console.log(partCategory);
    if (JSON.stringify(selectedCatogory).indexOf(partCategory.id) > -1) {
      const dublicateselectedCatogory = [...selectedCatogory];
      const value = dublicateselectedCatogory.filter((el) => {
        return el.id !== partCategory.id;
      });
      let estimatedPrice;
      if (value.length) {
        estimatedPrice = value
          .map((el) => {
            return el.price.split("$")[1];
          })
          .reduce((e, b) => Number(e) + Number(b));
      }

      console.log(estimatedPrice);
      if (value.length) {
        setTotalEsimatedPrice(estimatedPrice);
        setShowButton(true);
      } else {
        setTotalEsimatedPrice("");
        setShowButton(false);
      }

      setSelectedCatogory(value);
    } else {
      const value = [...selectedCatogory, partCategory];
      const estimatedPrice = value
        .map((el) => {
          return el.price.split("$")[1];
        })
        .reduce((e, b) => Number(e) + Number(b));

      console.log(estimatedPrice);
      setTotalEsimatedPrice(estimatedPrice);
      setSelectedCatogory(value);
      setShowButton(true);
    }
  };
  let buttonHandler = () => {
    navigate(
      `/color?estimatedprice=${totalEsimatedPrice}&selectedCatogory=${JSON.stringify(
        selectedCatogory
      )}`
    );
  };

  return (
    <div>
      <h1> What can we fix for you?</h1>
      <div>
        {/* <div style={{ border: "1px solid grey" }}>{selectedModel}</div> */}

        <PriceEstimation
          estimatedPrice={totalEsimatedPrice}
          selectingModel={selectedModel}
          selectingCatogory={selectedCatogory}
        />
      </div>
      {/* <OptionalMessage
        estimatedPrice={totalEsimatedPrice}
        selectingModel={selectedModel}
        selectingCatogory={selectedCatogory}
      /> */}
      <div>
        {parts.map((el) => {
          return (
            <div>
              <input
                onChange={selectedPartHandler.bind(null, el)}
                type='checkbox'
              />
              {el.name}({el.price})
            </div>
          );
        })}
      </div>
      {showButton && <button onClick={buttonHandler}> Continue </button>}
    </div>
  );
};
