import React, { useState, useEffect } from "react";
import "../Assets/style.css";

const CreateModal = () => {
  const [xPosition, setX] = React.useState(-100);
  const [flex, setFlex] = useState("none");

  const toggleMenu = () => {

    if(flex =="none"){
        // setX(0)
        setFlex("flex");
    }
    
    else{
        // setX(-100);
        setFlex("none");
    }

    // if (xPosition < 0) {

    //   setX();
     
    // } else {


    //   setX(-100);
    // }
    
    
  };

  useEffect(() => {
    setX(0);
    
    // setFlex("flex");
    console.log(xPosition);
    console.log(flex);
  }, []);

  return (
    <>
      <div
        className="create-modal"
        style={{
          transform: `translatex(${xPosition}%)`,
          width:500,
          display: `${flex}`,
          minHeigth: 100,
        }}
      >
          <p style={{marginLeft:"6rem",}}>this is somethings i'm trying my hand on</p>
      </div>

      <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(100px, 20vh)`,
          }}
        ></button>
    </>
  );
};

export default CreateModal;
