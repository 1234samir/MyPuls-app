import { Button } from "@material-ui/core";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();
  let buttonHandler = () => {
    navigate("/products");
  };
  return (
    <div className='bck'>
      <div className='bookButton'>
        <Button onClick={buttonHandler}>
          <p> Book to Service </p>
        </Button>
      </div>
    </div>
  );
}
