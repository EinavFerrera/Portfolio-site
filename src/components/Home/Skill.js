import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faRocket, faRainbow } from "@fortawesome/free-solid-svg-icons";

export default function Skill(props) {
  let arr = [faCode, faRocket, faRainbow];
  let index = ["code", "auto", "dream"];

  return (
    <div>
      <FontAwesomeIcon
        className="skill-icon"
        icon={arr[index.indexOf(props.type)]}
        bounce={
          props.hover.id === index.indexOf(props.type)
            ? props.hover.hovering
            : false
        }
      />
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>{props.titel}</h1>
    </div>
  );
}
