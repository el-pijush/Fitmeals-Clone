import React from "react";

const Header = (props) => {
  return (
    <div
      style={{
        color: "#F6F6F6",
        backgroundColor: "#292D35",
        width: "100%",
        height: "360px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px",
        marginTop: "150px",
      }}
    >
      <img
        src={props.url}
        alt=""
        style={{
          height: "360px",
          width: "100%",
          position: "absolute",
          opacity: "50%",
          objectFit: "cover",
        }}
      />
      <h1
        style={{
          fontFamily: "Fira Sans",
          fontSize: "50px",
          position: "relative",
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default Header;
