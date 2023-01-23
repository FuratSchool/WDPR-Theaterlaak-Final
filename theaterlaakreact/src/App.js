import React, { Component, useState} from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import { StoelReservatieContext } from "./components/stoelReservatieContext";

const App = () => {
  
  return (
    <div>
      
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      
    </div>
  );
};

export default App;
