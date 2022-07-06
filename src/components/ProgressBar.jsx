import React from "react";

const ProgressBar = ({ bgcolor, completed, image }) => {
  const progressStyles = {
    width: "65%",
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 30,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  const imgStyles = {
    width: "50px",
    height: "50px",
    marginTop: "1rem",
  };
  return (
    <div className="containerStyles" >
      <div style={progressStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      <img style={imgStyles} src={image} alt={image} />
    </div>
  );
};

export default ProgressBar;
