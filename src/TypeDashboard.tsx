import * as React from "react";
import { useParams } from "react-router-dom";

export const TypeDashboard = () => {
  const { typeId } = useParams();

  return <h2>Dashboard - {typeId}</h2>;
};
