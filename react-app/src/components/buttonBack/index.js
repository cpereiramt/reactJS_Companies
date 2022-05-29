import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button";
const BackButton = () => {
  const navigate = useNavigate();

  return <Button clickEvent={() => navigate(-1)} label="&#8592; Go Back" />;
};

export default BackButton;
