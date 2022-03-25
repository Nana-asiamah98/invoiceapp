import React from "react";
import "../Assets/style.css";

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);

  return (
    <div
      className="side-bar"
      style={{
        transform: `translatex(${xPosition}px)`,
        width: width,
        minHeigth: height,
      }}
    >
      {/* <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></button> */}
      <div className="content">
        <div className="home-icon-section">
          <div className="side-menu-up">
                {/* <span>Word</span> */}
                <img className="user-logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                width={30} height={30}/>
          </div>
        </div>
        <div className="home-icon-section">
          <div className="side-menu-down">
              <div className="menu-1">
              <span>Word</span>
              </div>
              <hr className="intersection-line"/>
              <div className="menu-2">
                <img className="user-logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                width={30} height={30}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
