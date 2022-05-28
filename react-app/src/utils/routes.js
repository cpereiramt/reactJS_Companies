import React from "react";
import { Route, BrowserRouter, Routes as Rts } from "react-router-dom";

import Home from "../pages/home";
import Company from "../pages/company";
import Number from "../pages/number";
import NotFound from "../pages/404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Rts>
        <Route element={<Home />} path="/" />
        <Route element={<Company />} path="/company/:companyId" />
        <Route element={<Number />} path="/number/:numberId" />
        <Route element={<NotFound />} path="*" />
      </Rts>
    </BrowserRouter>
  );
};

export default Routes;
