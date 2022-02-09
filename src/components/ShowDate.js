import React from "react";
import { useSelector } from "react-redux";

export default function ShowDate() {
  const getDate = useSelector((state) => state.selectedDateTime);
  console.log(getDate);

  return (
    <div>
      <div>
        <h1>Requested Time: </h1>
      </div>

      {getDate}
    </div>
  );
}
