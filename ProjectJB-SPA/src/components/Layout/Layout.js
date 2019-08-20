import React from "react";
import Navigation from "../Navigation/Navigation";

const layout = props => {

  var divStyle = {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-around'
  };

  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <div style={divStyle}>
        <div>{props.name}</div>
        <div>{props.id}</div>
      </div>
  
    </>
  );
};
export default layout;
