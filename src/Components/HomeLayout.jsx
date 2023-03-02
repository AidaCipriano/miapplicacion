import React from 'react';
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../Hooks/UseAuth";
import Navigation from "./NavigationLayout";


export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div id='root2'>
    <Navigation/>
      {outlet}
    </div>
  );
};
