"use client";
import Child from "@/components/Child";
import React, { useState } from "react";
import UserContext from "@/context/userContext";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function MainPage() {
  return (
    // <UserContext.Provider
    //   value={{ username, setUsername, counter, setCounter }}
    // >
    //   <div className=" h-screen bg-gray-600">
    //     This is main Main .Username is {username}
    //     Count Value = {counter}
    //     <Child />
    //   </div>
    // </UserContext.Provider>
    <Provider store={store}>
      <Child />
    </Provider>
  );
}
