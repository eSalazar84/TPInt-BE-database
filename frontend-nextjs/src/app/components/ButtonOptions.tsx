/* "use client";
import React from "react";
import "./table.css";

interface ButtonOptionsProps {
  product: string;
  icon: React.ReactNode;
  onClick: () => void;
}

function ButtonOptions({ product, icon, onClick }: ButtonOptionsProps) {
  const handleClick = () => {
    return alert(`Hi!, ${product}`);
  };

  return <button onClick={onclick}>{icon}</button>;
}

export default ButtonOptions; */

import React from "react";
import "./table.css";

interface ButtonOptionsProps {
  product: string;
  icon: React.ReactNode;
  onclick: () => void;
}

function ButtonOptions({ product, icon, onclick }: ButtonOptionsProps) {
  return <button onClick={onclick}>{icon}</button>;
}

export default ButtonOptions;
