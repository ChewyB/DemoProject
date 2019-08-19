import React from "react";
import Navigation from "../Navigation/Navigation";

const layout = props => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};
export default layout;
