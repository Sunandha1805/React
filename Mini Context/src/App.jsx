import { useState } from "react";
import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import React from "react";

function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col justify-center items-center h-screen w-full gap-2">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
