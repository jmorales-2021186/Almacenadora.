import React, { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { useNavigate, Outlet } from "react-router-dom";

import axios from "axios";

export const User = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};
