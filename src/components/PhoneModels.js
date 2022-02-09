import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { productAction } from "../actions/product.action";
import { useNavigate } from "react-router-dom";

export default function PhoneModels() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listModels = [
    { id: "1", name: "iphone5" },
    { id: "2", name: "iphone6" },
    { id: "3", name: "iphone7" },
    { id: "4", name: "iphone8" },
  ];
  return (
    <div>
      {listModels.map((el) => {
        return (
          <div
            style={{
              background: "light grey",
              display: "flex",
              justifyContent: "center",
              fontWeight: "20px",
              marginBottom: "15px",
              marginTop: "15px",
            }}>
            {" "}
            <p
              onClick={() => {
                dispatch(productAction(el.name));
                navigate("/appointment");
              }}
              style={{
                cursor: "pointer",
              }}>
              {el.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
