import React from "react";
import PriceEstimation from "./PriceEstimation";
import { useSelector } from "react-redux";
import ShowDate from "./ShowDate";
import EnterUserAddressFrom from "./EnterUserAddressForm";

export default function EnterUserDetails() {
  const selectedModel = useSelector((data) => data.selectedPhoneModel);
  const selectedCategory = useSelector((data) => data.selectedCategory);
  const totalPrice = useSelector((data) => data.totalPrice);

  const userAddress = useSelector((data) => data.selectedAddress);

  return (
    <div>
      <div>
        <h1> Where can we send important updates about your appointment?</h1>
      </div>
      <div>
        <EnterUserAddressFrom />
      </div>
      <PriceEstimation
        estimatedPrice={totalPrice}
        selectingModel={selectedModel}
        selectingCatogory={selectedCategory}
      />
      <ShowDate />
      <div>
        <h1> Address: </h1>
        {userAddress}
      </div>
    </div>
  );
}
