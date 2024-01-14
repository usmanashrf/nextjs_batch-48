import React from "react";
import { useSelector } from "react-redux";
import SubCHild from "./SubCHild";

export default function Child() {
  const counter = useSelector((state: any) => state.counterReducer);
  const username = useSelector((state: any) => state.userReducer);
  console.log(counter);
  return (
    <div className=" bg-gray-800 p-4">
      Counter {counter}
      User {username}
      <SubCHild />
    </div>
  );
}
