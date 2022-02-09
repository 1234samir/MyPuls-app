import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceEstimation from "./PriceEstimation";
import { setSelectedAddress } from "../actions/product.action";
import { useNavigate } from "react-router";

export default function EnterUserAddress() {
  const [address, setAddress] = useState("");
  const [addressInstruction, setAddressInstruction] = useState("");
  const selectedModel = useSelector((data) => data.selectedPhoneModel);
  const selectedCategory = useSelector((data) => data.selectedCategory);
  const totalPrice = useSelector((data) => data.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let clickHandler = () => {
    dispatch(setSelectedAddress(address));
    navigate("/enter-user-details");
  };
  let changeHandler = (e) => {
    setAddress(e.target.value);
  };

  let addressInstructionHandler = (e) => {
    setAddressInstruction(e.target.value);
  };

  return (
    <div>
      <h1> Where shall we send your technician?</h1>
      <div>
        <input onChange={changeHandler} type='text' placeholder='Address' />
      </div>
      <div>
        <textarea
          onChange={addressInstructionHandler}
          placeholder='Add address instruction (optional)'
        />
      </div>
      <div>
        <Button disabled={address.length < 1} onClick={clickHandler}>
          Continue
        </Button>
      </div>

      <PriceEstimation
        estimatedPrice={totalPrice}
        selectingModel={selectedModel}
        selectingCatogory={selectedCategory}
      />
    </div>
  );
}
